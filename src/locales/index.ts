export default {
  common: {
    extensionUser: "Extension user",
    selectAll: "Select All",
    progressing: "Progressing",
    done: "Done!",
    allDone: "All done!",
    save: "Save",
    clearInputs: "Clear text inputs",
    delete: "Delete",
    confirm: "Confirm",
    deleteN: "Delete %{number_of_contents}",
    confirmed: "Confirmed",
    deleted: "Deleted",
    edit: "Edit",
    profileID: "Profile ID",
    profileLinksOrIds: "Profile links or ids..",
    nick: "Nick",
    moderator: "Moderator",
    date: "Date",
    show: "Show",
    remove: "Remove",
    select: "Select",
    start: "Start",
    startAll: "Start all",
    stop: "Stop",
    continue: "Continue",
    no: "No",
    shortPoints: "Pts",
    writeSomething: "Write something",
    userHasNoPrivilege: "User has no privilege",
    nUsers: "%{n} users",
    nIds: "%{n} ids",
    nNotFound: "%{n} not found",
    removeAll: "Remove all",
    notificationMessages: {
      operationError: "An error occurred during operation. Please try again",
      somethingWentWrong: "Oops, something went wrong",
      somethingWentWrongPleaseRefresh: "Something happened, please refresh the page",
      cannotShareUserInfoWithServer: "An unexpected error occurred while trying to communicate with extension's server. Please try again in 2 sec",
      ongoingProcess: "Some contents are still processing. Do you still want to exit the page?",
      areYouSure: "Are you sure?",
      mayRequireWarning: "Do you want to apply a warning to this content?",
      ongoingProcessWait: "Some contents are still processing and you have to wait till it finished",
      xSendYouANewMessage: "%{userName} send you a new message",
      newNotification: "New notification",
      operationCompleted: "Operation completed",
      unsavedChanges: "You have some unsaved changes. Do you still want to close?",
      youNeedToSelectAtLeastOne: "You need to select at least one",
      cannotShareUserInfoWithServer_RefreshPage: "An unexpected error occurred while trying to communicate with extension's server. Could you refresh the page please?",
      operationErrorRefresh: "An error occurred during operation. Please refresh the page and try again"
    },
    moderating: {
      moreOptions: "More Options",
      moderate: "Moderate",
      doYouWantToDelete: "Do you want to delete?",
      selectContentType: "Please select a content type",
      selectReason: "Please select a reason",
      editInPanel: "Edit in moderation panel",
      point: "point",
      returnPoints: {
        text: "Don't give the points back",
        title: "Don't give the points back to owner"
      },
      giveWarning: {
        text: "Give a warning",
        title: "Delete selected contents with a warning"
      },
      approve: "Verify",
      approved: "Verified",
      unapprove: "Unverify",
      unapproved: "Unverified",
      doYouWantToDeleteWithReason: "Do you want to delete it?\n\n%{reason_title}:\n%{reason_message}",
      takePoints: {
        question: {
          text: "Take back respondent's points",
          title: "Remove the points received by the respondent's, when they answered the question"
        },
        answer: {
          text: "Take points back",
          title: "Take points back from user"
        }
      },
      contentAuthorIsModerator: "\"%{content_author}\" has moderation powers.\nPlease moderate this from the panel",
      contentAuthorHasSpecialRanks: "\"%{content_author}\" has \"%{special_rank}\" rank and might be someone who's important.\nPlease moderate this from the panel"
    },
    personalNote: {
      text: "Personal note",
      title: "You can add a personal private note here and that will relate to this user only",
      clickToAddANote: "Click to add a note"
    },
    listOfIds: "List of ids",
    pointsWithExample: {
      text: "Points: (1 or -1)",
      title: "You can add points by typing positive numbers like 123\nor\nyou can remove points by typing negative numbers like -123"
    },
    showMore: "Show more..",
    userHasNPoints: "User has %{n} points",
    send: "Send",
    deleteAll: "Delete all",
    ok: "OK",
    cancel: "Cancel",
    optional: "OPTIONAL",
    add: "Add",
    chooseAnOption: "Choose an option",
    deleteAcross: "Delete across",
    profileLinkOrId: "Profile link or id",
    beta: "Beta",
    deletedUser: "Deleted user",
    toggleSelections: "Toggle selections",
    copied: "Copied!",
    default: "Default",
    yes: "Yes"
  },
  popup: {
    notificationMessages: {
      shortLinkSuccessMessage: "Copied to clipboard!",
      languageChanged: "Language changed",
      cannotFindUser: "I couldn't find the user with entered ID number",
      createdMessage: "Created successfully",
      updatedMessage: "Updated successfully",
      removedMessage: "Removed successfully",
      published: "Published",
      unpublished: "Unpublished",
      layoutExtended: "Layout extended",
      switchedToNormal: "Switched back to normal",
      notifierOn: "Notifier active",
      notifierOff: "Notifier closed",
      idNumberRequired: "You need to enter an ID number",
      invalidId: "Invalid ID number",
      pleaseWait: "Please wait",
      openABrainlyPage: "You need to open a Brainly page in your browser",
      errorN: "Error %{error_code}",
      preparingUnsuccessful: "An error occurred while preparing the delete reasons and fetching from Brainly",
      noEvidenceFound: "Moderator didn't add any evidence nor comment",
      doYouWannaGiveThisPrivilege: "Do you wanna give this privilege to all extension users?",
      doYouWannaRevokeThisPrivilege: "Do you wanna revoke this privilege from all extension users?",
      privilegeHasGiven: "Privilege has given to %{user_amount} users",
      privilegeHasRevoked: "Privilege has revoked from %{user_amount} users",
      iCantFetchMarketData: "I can't fetch market data",
      incorrectData: "I can't communicate with %{market_domain_name}<br><br>Please visit any page from %{market_domain_name} or refresh the page that is already open"
    },
    createShortLinkButton: {
      text: "Shorten URL",
      title: "Create a short link for this web page"
    },
    shortenedLinks: {
      text: "Shortened Links",
      originalURL: "Original URL",
      created: "Created",
      shortURL: "Short URL",
      allClicks: "All Clicks",
      searchURL: "Search URL"
    },
    extensionOptions: {
      title: "Extension Options",
      themeColor: {
        title: "Theme Color",
        setYourColor: "Set your color",
        rainbow: "Rainbow",
        pickAColor: "Pick a color",
        colorFormatInfo: "You can set theme color with Hex color codes. I mean, you need to set #FF0000 for the red color"
      },
      quickDeleteButtons: {
        text: "Quick Delete Buttons",
        title: "You can set delete reasons of the quick delete buttons",
        comment: "Comment",
        question: "Question",
        answer: "Answer"
      },
      otherOptions: {
        title: "Other Options",
        extendMessagesLayout: {
          text: "Expand messages layout",
          title: "This option will extend the layout of the messages page. You can try it when the messages page is opened"
        },
        extensionLanguage: {
          text: "Extension language",
          chooseLanguage: "Select a language"
        },
        notifier: {
          text: "Browser notifications",
          title: "Extension will toast a notification you when you have a new message or new notification on Brainly"
        }
      }
    },
    extensionManagement: {
      title: "Ext. Management",
      users: {
        text: "Users",
        title: "You can set the extension user's permission and privileges",
        changeUserPrivileges: "Change all users privileges",
        revoke: "Revoke",
        give: "Give",
        addNewOrEditUser: "Add a new or edit extension user",
        permission: "Access permission",
        privileges: "Privileges",
        firstUsageTimeAgoPreTitle: "Started to use %{time}",
        hasntUsed: "User hasn't used the extension yet",
        important: "Important",
        lessImportant: "Less important",
        harmless: "Harmless",
        explainingColors: {
          line1: "Some users have colored border in their avatars and this colors shows that their access permission status of the extension.",
          line2: "<s>Red</s> border means that shown user are banned from the extension.",
          line3: "<s>Mustard</s> border means the user has permission to use the extension but hasn't started use it yet",
          line4: "<s>Green</s> color means the user is an active authorized user.",
          line5: "<s>No border</s> means that user has some privileges assigned but not given permission to use the extension in their account and hasn't started to use the extension yet."
        },
        privilegeList: {
          0: {
            title: "Extension admin",
            description: "Can able use the extension without any restriction. (No need to assign any other privileges, this will remove all restrictions)"
          },
          1: {
            title: "Quick delete questions",
            description: "On the pages of questions, archive mod and homepage, user can use the quick delete buttons for deleting the question/s"
          },
          2: {
            title: "Quick delete answers",
            description: "On the pages of questions, archive mod and homepage, user can use the quick delete buttons for deleting the answers"
          },
          4: {
            title: "Announcement management",
            description: "Can create, edit, remove or publish the internal extension announcements"
          },
          5: {
            title: "Manage extension users",
            description: "Can add or editing the extension users and give them privileges or permission to use the extension"
          },
          6: {
            title: "Selective answer approvement",
            description: "On the user contents page, user can approve or unapprove the answers by selecting"
          },
          7: {
            title: "Mass-Content deleter",
            description: "In the moderation panel, user can use this function for deleting multiple questions/answers/comments from Brainly"
          },
          8: {
            title: "Group messages",
            description: "In the messages page, user can send private messages to multiple users in a group at once"
          },
          9: {
            title: "Mass-Message sender",
            description: "In the moderation panel, user can use this function for sending a private message to entire users of your market"
          },
          10: {
            title: "Supervisors page, Message sender",
            description: "In the supervisors page, user can send a private message to listed moderators or all moderators of your market"
          },
          11: {
            title: "Delete reasons preferences management",
            description: "Can set warning level of delete reasons"
          },
          12: {
            title: "User deletion reports",
            description: "In the extension options, user can see account deletion reports"
          },
          13: {
            title: "Mass-Point changer",
            description: "In the moderation panel, user can change user's points by their ids"
          },
          14: {
            title: "Selective question deletion",
            description: "On the user contents and question searching page, user can use the selective deletion function to delete selected questions"
          },
          15: {
            title: "Selective answer deletion",
            description: "On the user contents page, user can use the selective deletion function to delete selected answers"
          },
          16: {
            title: "Selective comment deletion",
            description: "On the user contents page, user can use the selective deletion function to delete selected comments"
          },
          17: {
            title: "Reported comments deleter",
            description: "User can use this function to delete all the reported comments from Moderate all"
          },
          18: {
            title: "Mass-Moderate reported contents",
            description: "User can use this tool to mass-moderate reported contents from the Reported contents page"
          },
          19: {
            title: "Selective ask for correction",
            description: "On the user contents page, user can use the selective ask for correction to report answers"
          },
          20: {
            title: "Notice board management",
            description: "Can edit notice board content"
          },
          21: {
            title: "View users' privileges",
            description: "User can see extension privileges of other extension user's that has assigned to their profiles, without making any changes"
          },
          22: {
            title: "Can change access permission",
            description: "User can manage permissions to use the extension"
          },
          23: {
            title: "Can change important privilege",
            description: "User can assign/revoke important privileges to other extension users"
          },
          24: {
            title: "Can change less important privilege",
            description: "User can assign/revoke less important privileges to extension users"
          },
          25: {
            title: "Can change harmless privilege",
            description: "User can assign/revoke harmless privileges to other extension users"
          },
          26: {
            title: "Selective question deletion(Multiple pages)",
            description: "On the question searching page, user can use the selective deletion function to delete selected questions from multiple pages at once"
          },
          27: {
            title: "Mass-Manage users",
            description: "User can use this function to manage users massively. Like, changing a list of users points or approve answers of users or etc."
          },
          28: {
            title: "Action history reviewer",
            description: "Ability to review other moderators actions to be marked as valid or invalid and letting them know about their mistakes from moderator actions history page"
          },
          45: {
            title: "Quick delete comments",
            description: "On the pages of questions and archive mod, user can use the quick delete buttons for deleting the comments"
          },
          29: {
            title: "Mass-Moderate contents",
            description: "User can use this function to moderate contents massively"
          },
          30: {
            title: "Verify all answers",
            description: "User can use this function to approve all answers of users massively by providing list of ids/links of users"
          },
          31: {
            title: "Delete users",
            description: "User can use this function to delete users massively by providing list of ids/links of users"
          },
          32: {
            title: "Change points",
            description: "User can use this function to change points of users massively by providing list of ids/links of users"
          },
          33: {
            title: "Change ranks",
            description: "User can use this function to change ranks of users massively by providing list of ids/links of users"
          },
          36: {
            title: "Content delete options on profile page",
            description: "Allow this moderator to see the links used to delete all questions, answers, and comments from profile page of a user"
          },
          99: {
            title: "Reported contents (Beta)"
          },
          37: {
            title: "Moderate Panel > Delete all comments",
            description: "Ability to delete comments in bulk from the moderate panel"
          },
          38: {
            title: "Confirm reported answer button",
            description: "Allow moderator to use the confirm button to confirm/accept reported answers instead of verifying"
          },
          39: {
            title: "Action history, review management",
            description: "Ability to revert other reviewers' reviews on moderation history of moderators. Without this, reviewers can only revert their own reviews"
          }
        },
        veryImportant: "Very important"
      },
      announcements: {
        text: "Announcements",
        addNewAnnouncement: "Add a new announcement",
        editorTitle: "Title",
        editorContent: "Content",
        cancelEdit: "Cancel edit",
        update: "Update",
        publish: "Publish",
        unpublish: "Unpublish",
        readOn: "Read on:\n%{date}"
      },
      DeleteReasonsPreferences: {
        text: "Delete reasons preferences",
        withoutAsk: "Give warning without asking confirmation",
        withAsk: "Show confirmation dialog while deleting a content",
        findReason: "Find a reason",
        explaining: {
          line1: "You can find delete reasons by typing the name of the reason",
          line2: "After selecting one from the results, you can click %{exclamation-circle} button to give warning without asking confirmation from moderators while they are deleting a content. But in some cases, that may can change and moderators should decide if giving a warning is necessary or not. So you can click %{exclamation-triangle} to show confirmation dialog to moderators while they are deleting a content."
        }
      },
      accountDeleteReports: {
        text: "Account deletion reports",
        download: "Download",
        playOrPause: "Play/Pause",
        byModerator: "By moderator",
        byDeletedAccount: "By deleted account"
      }
    }
  },
  core: {
    assignExtensionPermission: "Assign extension permission",
    notificationMessages: {
      cantFetchDeleteReasons: "An unexpected error occurred while trying to prepare delete reasons",
      searching: "Searching..",
      userNotFound: "User not found",
      extensionServerError: "An unexpected error occurred while connecting the extension server. Please try again in ~5 sec.",
      ifErrorPersists: "If this error persists, please contact the extension manager and explain what happened :)",
      accessPermissionDenied: "You are not authorized to use the Brainly Tools.\nPlease contact the admin or the community manager to ask for permission",
      updateNeeded: "A new version of the extension is available.\nIt'll be updated in the background so could you wait ~10 seconds then refresh the page, please?",
      warningBeforeDelete: "This process will be executed and the numbers of questions ids in the input will be deleted once you confirmed this warning. \n\n Are you triple times sure?",
      enterIdWarn: "You need to add at least 1 id number of question that you want to delete",
      youNeedToEnterValidId: "You need to enter a valid id number",
      tryingToSendTheSameMessage: "You're trying to send the last message again. Do you still want to send?",
      alreadyStarted: "Process has already started",
      pointsAdded: "Points added",
      doYouWantToContinue: "Do you want to continue?",
      couldntAbleToGetNoticeBoardContent: "I couldn't get the content of the notice board",
      changesMayNotBeSaved: "Changes you made may not be saved",
      stillProcessing: "This section is still in process. Do you want to remove this block?\n(this will stop the moderating process)",
      youNeedToChooseActionType: "You need to choose an action type",
      errorOccurredWhileDeletingTheN: "An error occurred while deleting the %{content_id}",
      clickHereToSeeTheChangelog: "Click here to see the changelog"
    },
    MassContentDeleter: {
      text: "Mass-Content deleter",
      nIdsToDeleted: "%{n} ids to delete",
      nHasBeenDeleted: "%{n} ids has been deleted",
      containerExplanation: "You need to put content links or ids to text box line by line. Each line should contain 1 id number",
      select: {
        reason: "Reason",
        subReason: "Sub reason",
        action: "Action"
      }
    },
    MessageSender: {
      text: "Mass-Message sender",
      lastRegisteredUserId: "Enter last registered user id",
      information: "This function can send your message to the users by counting backwards from the given id number. Once you've start the process and if you want to send the message to the id numbers, you should have to wait and not close this page(this includes your computer as well) till the process finishes.",
      target: "Target",
      allUsers: "All users",
      moderators: "Moderators",
      startOver: "Start over",
      sent: "Sent",
      usersNotFound: "Users not found",
      errors: "Errors",
      unknownError: "Unknown error",
      somethingWentWrongWhileLoadingModerators: "Something went wrong while fetching details of moderators"
    },
    announcements: {
      text: "Announcements",
      title: "Once you've read the announcement, you need to mark it as read",
      markAsRead: "Mark as read"
    },
    pointChanger: {
      text: "Mass-Point changer",
      enterOrPasteUID: "Enter or paste user profile ID",
      youNeedToEnterOrPaste: "You need to enter user id or you can paste copied list of user ids into input",
      pastingExample: "Example list of users ids",
      pastingExample2: "Also, you can specify the points in the list before copy paste",
      addPoints: "Add points to this user",
      addPointsToAll: "Add points to all users",
      pointsNotSpecified: "You must give points to at least 1 user in order to proceed",
      applyPointsToAllInputs: "Apply points to all inputs",
      clearList: "Clear list"
    },
    reportedCommentsDeleter: {
      text: "Reported comments deleter",
      description: "You can delete all reported comments in Moderate All with one click. You just need to start and keep this tab open. That's all.",
      deleting: "Deleting",
      stopped: "Stopped",
      numberOfPending: "Pending",
      selectAReason: "Select a reason"
    },
    noticeBoard: {
      text: "Noticeboard",
      lastChanges: "Last changes",
      readBy: "Read by"
    },
    massManageUsers: {
      notificationMessages: {
        doYouWantToRemoveSelectedUsers: "Do you want to remove selected users from the list?",
        doYouReallyWantToRemoveAllUsers: "Do you really want to remove all users from the list?",
        tryingToAddPreviouslyRemovedIds: "The ids you've entered contains previously removed id numbers from the list\n\nClick \"OK\" if you want to add or\nclick \"Cancel\" if you want to exclude.",
        areYouSureAboutDeletingAllListedUsers: "You are about to confirm to delete all listed users.\n\nAre you triple sure about this?",
        thereIsNoUserLeft: "There is no user left in the list"
      },
      text: "Mass-Manage users",
      removeSelected: "Remove selected",
      removeSelectedUsersFromTheList: "Remove selected users from the list",
      removeAllUsersFromTheList: "Remove all users from the list",
      sections: {
        approveAnswers: {
          numberOfApprovedAnswers: "Number of approved answers",
          numberOfAlreadyApprovedAnswers: "Number of already approved answers",
          actionButton: {
            text: "Verify answers",
            title: "Verify all answers of all listed users"
          }
        },
        deleteUsers: {
          actionButton: {
            text: "Delete users",
            title: "Delete all listed users"
          }
        },
        changeRanks: {
          actionButton: {
            text: "Change ranks",
            title: "Add or remove ranks from all listed users"
          }
        }
      }
    },
    MassModerateContents: {
      text: "Mass-Moderate contents",
      nContents: "%{n} contents",
      nIgnored: "%{n} ignored",
      contentType: "Content type",
      targets: {
        text: "Specify targets",
        listOfIds: {
          contentLinksOrIDs: "Content links or ids.."
        },
        idRange: {
          text: "ID range",
          youNeedToEnterTwoDifferentIdNumbers: "You need to enter different id numbers separated by a dash(-) or dots(.. or ...) to moderate the numbers between range",
          exampleUsage: "Example Usage",
          input: "Input",
          output: "Output"
        },
        searchQuestion: {
          text: "Search question",
          whatIsYourQuestion: "What is your question?"
        }
      },
      methods: {
        text: "Methods",
        clickListToCopy: "Click list to copy ids to clipboard",
        iCantCopy: "I can't copy :(",
        reportForAbuse: {
          chooseAReason: "Choose a reason",
          tabButton: {
            text: "Report for abuse",
            title: "Report abusive contents"
          }
        },
        addAnswer: {
          tabButton: {
            text: "Add answer",
            title: "Add an answer to target questions"
          }
        }
      }
    }
  },
  home: {
    todaysActions: "Today's actions"
  },
  messages: {
    notificationMessages: {
      unsendedMessage: "You didn't send your message, do you still want to leave?"
    },
    groups: {
      title: "Groups",
      createGroup: "Create a group",
      editGroup: "Edit group",
      deleteGroup: "Delete group",
      groupName: "Group name",
      groupColor: "You can set a color for this group name to make it look different from other created groups",
      groupMembers: "Group members",
      searchResults: "Search results",
      selectGroupType: "Select a group type",
      addAll: "Add all",
      writeSomething: "Type your message here",
      pinTip: "You can pin your groups by clicking the %{pin} icon.",
      notificationMessages: {
        groupCreated: "%{groupName} successfully created",
        groupUpdated: "%{groupName} updated",
        cantCreate: "I can't create this group because something must be wrong. Could you please check your details?",
        userAlreadyAdded: "This user is already on the list",
        doYouWantToRemoveMembers: "Do you want to remove all group members?",
        youNeedToAddMembers: "You need add at least one user in the group members list",
        youHaventCreatedAGroupYet: "You haven't created a group yet..",
        wrongMessageLength: "Your message must be between 1 and %{max_value} characters long",
        messageContainsSwear: "Oops! It seems like your message contains swearwords. You can't send it!",
        cantFetchGroupData: "An unexpected error has occurred. I couldn't fetch messages of this group from the extension server"
      },
      userCategories: {
        findUsers: {
          text: "Find users",
          nickOrID: "Nick or profile id"
        },
        friendsList: "Friends list",
        moderatorRanks: {
          text: "Moderator ranks",
          selectRank: "Select a rank"
        },
        allModerators: "All moderators"
      }
    }
  },
  userContent: {
    notificationMessages: {
      alreadyApproved: "This answer is already approved",
      alreadyUnapproved: "This answer is already unapproved",
      someOfSelectedAnswersAreApproved: "Some selected answers have already been approved, so technically you can't approve those answers again",
      selectAnUnapprovedAnswerForApproving: "You need to select some unapproved answer/s to start approving them",
      confirmApproving: "Do you want to approve this answer?",
      someOfSelectedAnswersAreUnapproved: "Some selected answers aren't approved, so technically you can't unapprove those answers",
      selectAnApprovedAnswerForUnapproving: "You need to select some approved answer/s to start unapproving them",
      confirmUnapproving: "Do you want to unapprove this answer?",
      doYouWantToConfirmThisContent: "Do you want to confirm this content?",
      confirmReporting: "Do you want to report selected answers for correction?",
      selectAtLeastOneContent: "Select at least one content",
      xIsAlreadyApproved: "%{row_id} has already approved",
      xIsAlreadyUnapproved: "%{row_id} has already unapproved",
      confirmApprovingSelected: "Do you want to approve selected answers?"
    },
    approvedAnswer: "Approved answer",
    bestAnswer: "Best answer",
    askForCorrection: {
      text: "Ask for correction",
      placeholder: "Write additional information for users",
      ask: "Ask"
    },
    hasAttachment: {
      question: "Question has an attachment",
      answer: "Answer has an attachment"
    },
    reported: {
      question: "Reported question",
      answer: "Reported answer",
      comment: "Reported comment"
    },
    copyQuestionLinks: "Copy question links"
  },
  userProfile: {
    notificationMessages: {
      areYouSureDeleteSelectedFriends: "Are you sure you want to remove selected user's from your friends list?",
      areYouSureRemoveAllFriends: "Are you sure you want to remove all your friends?",
      youHaveNoFriends: "Don't be sad because you have no friends to list :/ Sorry",
      cannotChangeBio: "I couldn't change your bio :/ Sorry..",
      fileSizeExceeded: "The %{file_name} file exceeds the size limit of %{file_size}",
      aShortcutFile: "You're trying to add a shortcut of a file and it's kind of garbage.\nYou may need to select the original file instead that is linked\nDo you still want to add this shortcut?",
      unableToReportAccountDeleting: "I couldn't report your deletion request to the community manager, so I can't proceed to delete the account. Sorry :/<br>If this error persists, ask for help from your extension manager",
      confirmNoEvidenceOrComment: "You didn't add any evidence or comment.\nDo you still want to delete this profile?",
      selectAtLeastOneUser: "You need to select at least one user",
      youNeedToProvideSomeDetails: "You need to provide some details",
      confirmAccountDeletion: "Do you want to delete this profile?",
      profileHasAlreadyDeleted: "This profile has already deleted by someone else"
    },
    previousNicks: {
      text: "Previous nicks",
      title: "Previous nicks of the user registered in the database"
    },
    userBio: {
      title: "Bio",
      description: "Bio text from the mobile app of Brainly"
    },
    showAllFriends: {
      text: "Show all",
      title: "List your all friends"
    },
    removeAllFriends: {
      text: "Unfriend all",
      title: "Remove all your friends"
    },
    removeSelectedFriends: {
      text: "Unfriend",
      title: "You can remove the selected friends from your friend list"
    },
    accountDelete: {
      evidences: "Evidences",
      willBeReviewedByCommunityManager: "will be reviewed by your Community Manager",
      addFiles: "Add files",
      compressingTheFile: "Compressing the %{file_name}",
      compressingTheFiles: "Compressing the files",
      uploading: "Contents uploading %{percentage_value}",
      deletingContinues: "Deleting continues..",
      reasonForDeletion: "Any reason for deletion?"
    },
    rankManager: {
      title: "Manage special ranks",
      removeAllRanks: "Remove all special ranks",
      allRanksRemoved: "All special ranks are removed",
      updatingRanks: "Updating ranks",
      xHasAssigned: "%{rank_name} has assigned",
      removingAllSpecialRanks: "Removing all special ranks.."
    },
    morePanel: {
      title: "More..",
      privileges: {
        title: "Active privileges"
      },
      manageExtensionUser: {
        title: "Manage extension privileges"
      },
      reportUser: {
        report: "Report this user",
        whatIsTheReason: "What is the reason?",
        reasons: {
          pointTransferer: "Point transferer",
          spammer: "Spammer",
          other: "Other"
        }
      }
    },
    userWarningsList: {
      name: "Last warnings",
      showRest: "Show rest"
    }
  },
  userWarnings: {
    notificationMessages: {
      ifYouHavePrivileges: "Warning/s will be revoked if you have authority. Also, I'll suggest you to wait like ~10 seconds once the process has started"
    },
    cancelWarnings: "Cancel Warnings"
  },
  supervisors: {
    notificationMessages: {
      noUser: "There are no users to send this message to",
      emptyMessage: "You cannot send empty message"
    },
    allRanks: "All Ranks",
    tableLayout: "Table Layout",
    sendMessagesToMods: "Send message to mods",
    sendMessagesToListedMods: {
      text: "to listed mods",
      title: "Send a message to only listed moderators"
    },
    sendMessagesToAllMods: {
      text: "to all mods",
      title: "Send a message to all moderators"
    }
  },
  uploader: {
    notificationMessages: {
      alreadyExist: "%{file_name} already exists",
      fileNameCannotContainBackslash: "File name cannot contain backslash. Please rename the %{file_name}"
    },
    text: "Upload multiple files",
    selectFiles: "Select files"
  },
  moderateAll: {
    wrongContentConfirmer: {
      text: "Confirm all corrected contents"
    },
    notificationMessage: {
      questionRemovedPanelClosing: "Question has been removed. Panel will close in few seconds"
    }
  },
  moderatorActionHistory: {
    revert: "Revert",
    valid: "Valid",
    validateAll: "Validate all",
    validateAllDescription: "Validate all non-reviewed actions on this page",
    invalid: "Invalid",
    invalidateAll: "Invalidate all",
    invalidateAllDescription: "Invalidate all non-reviewed actions on this page",
    revertAll: "Revert all",
    statusTitle: {
      valid: "Validated by %{nick} on %{date}",
      invalid: "Invalidated by %{nick} on %{date}"
    },
    toggleDetails: "Toggle details",
    validated: "Action marked as valid",
    invalidated: "Action marked as invalid",
    allValidated: "Actions are marked as valid",
    allInvalidated: "Actions are marked as invalid",
    informModeratorTitle: "Inform %{nick} about this invalid action",
    informModeratorTitleForMany: "Inform %{nick} about these invalid actions",
    informModerator: "Inform moderator",
    messageTemplate: "Hello %{nick},\n\n..\n\nQuestion: %{question}\n\nAttachment: %{links}",
    anAttachmentUploading: "Please wait for attachments to have uploaded",
    anErrorOccurredWhileSendingMessage: "An error occurred while sending message:\n%{reason}",
    warnBeforeEditing: "Do you really want to edit the last message?",
    informed: "Informed",
    reviewWithdrawn: "Review have successfully withdrawn",
    reviewsWithdrawn: "Reviews have successfully withdrawn",
    reviewDetails: "Review details"
  },
  question: {
    keywords: "Keywords"
  },
  reportedContents: {
    questionAnswerReports: {
      text: "Questions/Answers (%{number_of_reports})",
      title: "Click here to see reported questions and answers"
    },
    commentReports: {
      text: "Comments (%{number_of_reports})",
      title: "Click here to see reported comments"
    },
    correctionReports: {
      text: "Correction Reports (%{number_of_reports})",
      title: "Click here to view the answers that have been reported for correction and are waiting to be moderated"
    },
    subjectFilterFirstOption: "Subject — ALL",
    options: {
      buttonVisibility: {
        optionName: "Action buttons visibility",
        alwaysVisible: "Always visible",
        onHoverOrTouch: "On hover/touch"
      },
      filter: {
        optionName: "Filter reports",
        description: "Filters can be applied only to those reports that have been fetched",
        filters: {
          reporter: {
            name: "Reporter user"
          },
          reported: {
            name: "Reported user"
          },
          reportingDate: {
            name: "Reported between",
            startingDate: "Starting date",
            endingDate: "Ending date"
          },
          contentType: {
            name: "Content type",
            Question: "Question",
            Answer: "Answer",
            Comment: "Comment"
          },
          contentLength: {
            name: "Content length",
            equals: "equals to",
            lowerThan: "lower than",
            label: {
              equals: "equals to %{N}",
              lowerThan: "lower than %{N}",
              greaterThan: "greater than %{N}"
            },
            greaterThan: "greater than"
          },
          attachmentLength: {
            name: "Attachment count"
          },
          subject: {
            name: "Subject"
          },
          userFilter: {
            id: "id",
            nick: "nick",
            lookFor: "Look for",
            specialRank: "Special rank",
            anyRank: "Any rank"
          },
          stringFilter: {
            chooseCondition: "Choose condition",
            label: {
              contains: "contains : %{input}",
              sameWith: "exactly same with : %{input}",
              startsWith: "starts with : %{input}",
              endsWith: "ends with : %{input}",
              regExp: "%{input}"
            },
            conditions: {
              contains: "contains",
              sameWith: "exactly same with",
              startsWith: "starts with",
              endsWith: "ends with",
              regExp: "RegExp(JS/ES6)"
            },
            additionalData: "Additional data",
            content: "Content"
          }
        },
        pageNumberInputTitle: "Enter a page number between %{MIN_N} and %{MAX_N}"
      },
      name: "Options",
      density: {
        optionName: "Density"
      },
      lazyQueue: {
        optionName: "Lazy queue (Refresh required)",
        description: "This option enables lazy loading for the reported contents queue.\n\nWhen enabled, the queue displays report boxes with a delay while scrolling through reports, so it's memory-friendly.\nHowever, the \"Find on page\" feature will not function for invisible reports. The page might display empty reports while scrolling too fast"
      },
      toggleInfiniteLoader: {
        optionName: "Scrollable loading",
        description: "Turn on/off auto-loading contents on scrolling the page"
      },
      loadLimiter: {
        optionName: "Load limiter",
        description: "This option allows you to increase/decrease the limit of how many report box will be shown after clicking the load more button.\n\nHigher values may cause a little delay in showing boxes"
      }
    },
    queue: {
      rating: "%{rating} points for %{ratesCount} votes",
      bestAnswer: "This is the Brainliest Answer",
      popularQuestion: "Popular question!",
      moderatorVerifiedSomeonesAnswer: "%{verifier} has verified %{author}'s answer",
      loadMore: "Load more..",
      exportReports: {
        exportAsSpreadsheet: "Export filtered reports as spreadsheet",
        nothingToExport: "There is no report left to export",
        id: "Id",
        questionId: "Question id",
        reportedUserId: "Reported user id",
        reporterUserId: "Reporter user id",
        reportedOn: "Reported on",
        reason: "Reason",
        contentShort: "Content(short)",
        isModerated: "Is moderated?",
        isCorrected: "Is corrected?"
      },
      notYetCorrected: "Not yet corrected"
    },
    loadAll: "Fetch all reports",
    loadAllConfirmationMessage: "I'll try to fetch all reported contents from Brainly but the process can be interrupted by Brainly because of elevated requests.\nPlease confirm to start the process",
    massModerate: {
      name: "Mass-Moderate contents",
      description: "You can only moderate contents that have been fetched",
      confirm: {
        text: "Confirm",
        noContentToConfirm: "There is no content that's available for confirmation",
        confirmModeration: "Do you really want to confirm %{n} reported contents?"
      },
      delete: {
        text: "Delete",
        choose: {
          Question: "Choose a reason for questions",
          Answer: "Choose a reason for answers",
          Comment: "Choose a reason for comments"
        },
        noContentToDelete: "There is no content that's available for deletion",
        confirmDeletion: "Do you really want to delete %{n} reported contents?",
        warnAboutConfirmedContents: "Warning!\n%{N_of_confirmed} of the %{N_of_filtered} contents you want to delete have already been confirmed.\nDo you want those contents to be deleted as well?"
      },
      status: {
        fetched: "%{count} fetched",
        filtered: "%{count} filtered",
        visible: "%{count} visible",
        moderated: "%{count} moderated",
        failed: "%{count} failed",
        alreadyModerated: "%{count} already moderated"
      },
      visible: {
        contents: "Visible contents",
        questions: "Visible questions",
        answers: "Visible answers",
        comments: "Visible comments"
      },
      filtered: {
        contents: "Filtered contents",
        questions: "Filtered questions",
        answers: "Filtered answers",
        comments: "Filtered comments"
      },
      ignoreContent: "Ignore this report while mass-moderating",
      ignoreContents: "Ignore %{number} visible reports while mass-moderating"
    },
    categoryFilterFirstOption: {
      name: "Report reason — ALL",
      reasonsFor: {
        Question: "Reasons for questions",
        Answer: "Reasons for answers",
        Comment: "Reasons for comments"
      }
    },
    name: "Reported contents"
  },
  moderationPanel: {
    text: "Question Moderation",
    answers: "Answers (%{number_of_answers})",
    panelWillClose: "Moderation panel will close in %{remain_N}",
    showAllComments: "Show all comments",
    failedToGetLogs: "Cannot fetch logs of question",
    seeMoreDeleteOptions: "See more delete options",
    thereIsNoReportLeft: "There is no report left",
    deleteAllComments: "Delete all comments",
    confirmDeletingNComments: "Please confirm deleting %{N} comments",
    commentsDeleted: "Comments deleted!",
    switchingToNextContent: "I'll try to switch to the next content",
    hideDeletedComments: "Hide deleted comments",
    showDeletedComments: "Show deleted comments",
    janToDec: "JAN\nDEC",
    decToJan: "DEC\nJAN",
    sortDESC: "Sort comments from newer to older",
    sortASC: "Sort comments from older to newer",
    showLess: "Show less",
    toggleReportedComments: "Toggle reported comments",
    corrected: "Corrected",
    originalAnswer: "Original answer",
    answerHasCorrected: "%{nick} has corrected the answer",
    questionHasBeenDeleted: "Question has been deleted",
    moderationCompleted: "Moderation completed",
    extendBy15Minutes: "Extend by 15 minutes",
    log: {
      text: "Log",
      deletedWithWarning: "Deleted with a warning",
      nActions: "%{number_of} actions",
      nMore: "%{number_of_occurrences} more"
    }
  },
  shortAnswersPage: {
    selectAtLeastOneAnswer: "You need to select at least one answer",
    doYouWantToDeleteSelectedAnswers: "Do you really want delete the selected answers?"
  },
  questionSearch: {
    selectAtLeastOneQuestion: "Select at least one question",
    doYouWantToDeleteSelectedQuestions: "Do you really want delete %{N} selected questions?"
  }
}
