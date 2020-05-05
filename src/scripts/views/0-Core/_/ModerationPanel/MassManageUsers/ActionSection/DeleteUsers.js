import ActionSection from ".";
import Action from "../../../../../../controllers/Req/Brainly/Action";
import Button from "../../../../../../components/Button";

export default class DeleteUsers extends ActionSection {
  constructor(main) {
    /**
     * @type {import("./index").renderDetails}
     */
    let renderDetails = {
      content: {
        text: System.data.locale.core.massManageUsers.sections.deleteUsers
          .actionButton.title,
        style: " sg-text--peach-dark"
      },
      actionButton: {
        ...System.data.locale.core.massManageUsers.sections.deleteUsers
        .actionButton,
        type: "transparent-peach"
      }
    }

    super(main, renderDetails);

    this.started = false;
    this.openedConnection = 0;

    this.RenderContent();
    this.RenderStopButton();
    this.RenderStartButton();
    this.BindHandlers();
  }
  RenderContent() {
    this.$content = $(`
    <div class="sg-actions-list sg-actions-list--no-wrap sg-actions-list--to-top sg-actions-list--centered">
      <div class="sg-actions-list__hole sg-actions-list__hole--10-em">
        <div class="sg-content-box">
          <div class="sg-content-box__content sg-content-box__content--full sg-content-box__content--with-centered-text"></div>
        </div>
      </div>
    </div>`);

    this.$startButtonContainer = $(".sg-content-box__content", this.$content);

    this.$content.appendTo(this.$contentContainer);
  }
  RenderStopButton() {
    this.$stopButton = Button({
      type: "solid-peach",
      size: "small",
      text: System.data.locale.common.stop
    });
  }
  RenderStartButton() {
    this.$startButton = Button({
      type: "solid-mint",
      size: "small",
      text: System.data.locale.common.start
    });

    this.$startButton.appendTo(this.$startButtonContainer);
  }
  BindHandlers() {
    this.$startButton.click(this.StartDeleting.bind(this));
    this.$stopButton.click(this.StopDeleting.bind(this));
  }
  StartDeleting() {
    this.SetUsers();

    if (this.userIdList && confirm(System.data.locale.core.massManageUsers
        .notificationMessages.areYouSureAboutDeletingAllListedUsers)) {
      this.started = true;

      this.ShowUserList();
      this.ShowStopButton();
      this.MoveDeletedAccountsFirst();
      this.TryToDelete();
      this._loop_TryToDelete = setInterval(this.TryToDelete.bind(this), 1000);
    }
  }
  ShowUserList() {
    this.$userListContainer.appendTo(this.$content);
  }
  ShowStopButton() {
    this.HideStartButton();
    this.$stopButton.appendTo(this.$startButtonContainer);
  }
  HideStartButton() {
    this.main.HideElement(this.$startButton);
  }
  HideStopButton() {
    this.main.HideElement(this.$stopButton);
    this.ShowStartButton();
  }
  ShowStartButton() {
    this.$startButton.appendTo(this.$startButtonContainer);
  }
  MoveDeletedAccountsFirst() {
    /**
     * @type {number[]}
     */
    this.userIdList = this.userIdList.filter(id => {
      let user = this.main.users[id];

      if (!user || typeof user == "boolean")
        return;

      if (user.details.is_deleted)
        return this.UserDeleted(user);

      return true;
    });
  }
  TryToDelete() {
    if (!this.started)
      return;

    for (let i = 0; i < 7; i++)
      if (this.openedConnection < 7) {
        this.openedConnection++;
        let user = this.PickUser();

        if (!user)
          return this.StopDeleting();

        if (typeof user == "boolean")
          return;

        this.DeleteUser(user);
      }
  }
  StopDeleting() {
    this.started = false;

    this.HideStopButton();
    clearInterval(this._loop_TryToDelete);
    this.main.modal.Notification({
      type: "success",
      html: System.data.locale.common.allDone,
    });
  }
  /**
   * @param {import("../User").default} user
   */
  async DeleteUser(user) {
    try {
      if (user.details.is_deleted) {
        this.openedConnection--;
        return this.UserDeleted(user);
      }

      await new Action().DeleteAccount(user.details.id);
      //await System.TestDelay();
      this.UserDeleted(user);
    } catch (error) {
      console.error(error);
    }

    this.openedConnection--;
  }
  /**
   * @param {import("../User").default} user
   */
  UserDeleted(user) {
    user.Move$To$(this.$userList);
    user.ChangeBoxColor("sg-box--peach");
  }
}
