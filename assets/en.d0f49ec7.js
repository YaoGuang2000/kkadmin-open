var l=Object.defineProperty,s=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var a=(t,e,o)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,n=(t,e)=>{for(var o in e||(e={}))d.call(e,o)&&a(t,o,e[o]);if(r)for(var o of r(e))u.call(e,o)&&a(t,o,e[o]);return t},i=(t,e)=>s(t,c(e));import{g as m}from"./index.2aa06fea.js";import{aU as p}from"./vendor.bf608252.js";var g={okText:"OK",closeText:"Close",cancelText:"Cancel",loadingText:"Loading...",saveText:"Save",delText:"Delete",resetText:"Reset",searchText:"Search",queryText:"Search",inputText:"Please enter",chooseText:"Please choose",redo:"Refresh",back:"Back",light:"Light",dark:"Dark"},b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:g}),h={app:{searchNotData:"No search results yet",toSearch:"to search",toNavigate:"to navigate"},countdown:{normalText:"Get SMS code",sendText:"Reacquire in {0}s"},cropper:{selectImage:"Select Image",uploadSuccess:"Uploaded success!",modalTitle:"Avatar upload",okText:"Confirm and upload",btn_reset:"Reset",btn_rotate_left:"Counterclockwise rotation",btn_rotate_right:"Clockwise rotation",btn_scale_x:"Flip horizontal",btn_scale_y:"Flip vertical",btn_zoom_in:"Zoom in",btn_zoom_out:"Zoom out",preview:"Preivew"},drawer:{loadingText:"Loading...",cancelText:"Close",okText:"Confirm"},excel:{exportModalTitle:"Export data",fileType:"File type",fileName:"File name"},form:{putAway:"Put away",unfold:"Unfold",maxTip:"The number of characters should be less than {0}",apiSelectNotFound:"Wait for data loading to complete..."},icon:{placeholder:"Click the select icon",search:"Search icon",copy:"Copy icon successfully!"},menu:{search:"Menu search"},modal:{cancelText:"Close",okText:"Confirm",close:"Close",maximize:"Maximize",restore:"Restore"},table:{settingDens:"Density",settingDensDefault:"Default",settingDensMiddle:"Middle",settingDensSmall:"Compact",settingColumn:"Column settings",settingColumnShow:"Column display",settingIndexColumnShow:"Index Column",settingSelectColumnShow:"Selection Column",settingFixedLeft:"Fixed Left",settingFixedRight:"Fixed Right",settingFullScreen:"Full Screen",index:"Index",total:"total of {total}"},time:{before:" ago",after:" after",just:"just now",seconds:" seconds",minutes:" minutes",hours:" hours",days:" days"},tree:{selectAll:"Select All",unSelectAll:"Cancel Select",expandAll:"Expand All",unExpandAll:"Collapse all",checkStrictly:"Hierarchical association",checkUnStrictly:"Hierarchical independence"},upload:{save:"Save",upload:"Upload",imgUpload:"ImageUpload",uploaded:"Uploaded",operating:"Operating",del:"Delete",download:"download",saveWarn:"Please wait for the file to upload and save!",saveError:"There is no file successfully uploaded and cannot be saved!",preview:"Preview",choose:"Select the file",accept:"Support {0} format",acceptUpload:"Only upload files in {0} format",maxSize:"A single file does not exceed {0}MB ",maxSizeMultiple:"Only upload files up to {0}MB!",maxNumber:"Only upload up to {0} files",legend:"Legend",fileName:"File name",fileSize:"File size",fileStatue:"File status",startUpload:"Start upload",uploadSuccess:"Upload successfully",uploadError:"Upload failed",uploading:"Uploading",uploadWait:"Please wait for the file upload to finish",reUploadFailed:"Re-upload failed files"},verify:{error:"verification failed\uFF01",time:"The verification is successful and it takes {time} seconds\uFF01",redoTip:"Click the picture to refresh",dragText:"Hold down the slider and drag",successText:"Verified"}},f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:h}),T={footer:{onlinePreview:"Preview",onlineDocument:"Document"},header:{dropdownItemDoc:"Document",dropdownItemLoginOut:"Login Out",tooltipErrorLog:"Error log",tooltipLock:"Lock screen",tooltipNotify:"Notification",tooltipEntryFull:"Full Screen",tooltipExitFull:"Exit Full Screen",lockScreenPassword:"Lock screen password",lockScreen:"Lock screen",lockScreenBtn:"Locking",home:"Home"},multipleTab:{reload:"Refresh current",close:"Close current",closeLeft:"Close Left",closeRight:"Close Right",closeOther:"Close Other",closeAll:"Close All"},setting:{contentModeFull:"Full",contentModeFixed:"Fixed width",topMenuAlignLeft:"Left",topMenuAlignRight:"Center",topMenuAlignCenter:"Right",menuTriggerNone:"Not Show",menuTriggerBottom:"Bottom",menuTriggerTop:"Top",menuTypeSidebar:"Left menu mode",menuTypeMixSidebar:"Left menu mixed mode",menuTypeMix:"Top Menu Mix mode",menuTypeTopMenu:"Top menu mode",on:"On",off:"Off",minute:"Minute",operatingTitle:"Successful!",operatingContent:"The copy is successful, please go to src/settings/projectSetting.ts to modify the configuration!",resetSuccess:"Successfully reset!",copyBtn:"Copy",clearBtn:"Clear cache and to the login page",drawerTitle:"Configuration",darkMode:"Dark mode",navMode:"Navigation mode",interfaceFunction:"Interface function",interfaceDisplay:"Interface display",animation:"Animation",splitMenu:"Split menu",closeMixSidebarOnChange:"Switch page to close menu",sysTheme:"System theme",headerTheme:"Header theme",sidebarTheme:"Menu theme",menuDrag:"Drag Sidebar",menuSearch:"Menu search",menuAccordion:"Sidebar accordion",menuCollapse:"Collapse menu",collapseMenuDisplayName:"Collapse menu display name",topMenuLayout:"Top menu layout",menuCollapseButton:"Menu collapse button",contentMode:"Content area width",expandedMenuWidth:"Expanded menu width",breadcrumb:"Breadcrumbs",breadcrumbIcon:"Breadcrumbs Icon",tabs:"Tabs",tabDetail:"Tab Detail",tabsQuickBtn:"Tabs quick button",tabsRedoBtn:"Tabs redo button",tabsFoldBtn:"Tabs flod button",sidebar:"Sidebar",header:"Header",footer:"Footer",fullContent:"Full content",grayMode:"Gray mode",colorWeak:"Color Weak Mode",progress:"Progress",switchLoading:"Switch Loading",switchAnimation:"Switch animation",animationType:"Animation type",autoScreenLock:"Auto screen lock",notAutoScreenLock:"Not auto lock",fixedHeader:"Fixed header",fixedSideBar:"Fixed Sidebar",mixSidebarTrigger:"Mixed menu Trigger",triggerHover:"Hover",triggerClick:"Click",mixSidebarFixed:"Fixed expanded menu"}},S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:T}),y={api:{operationFailed:"Operation failed",errorTip:"Error Tip",errorMessage:"The operation failed, the system is abnormal!",timeoutMessage:"Login timed out, please log in again!",apiTimeoutMessage:"The interface request timed out, please refresh the page and try again!",apiRequestFailed:"The interface request failed, please try again later!",networkException:"network anomaly",networkExceptionMsg:"Please check if your network connection is normal! The network is abnormal",errMsg401:"The user does not have permission (token, user name, password error)!",errMsg403:"The user is authorized, but access is forbidden!",errMsg404:"Network request error, the resource was not found!",errMsg405:"Network request error, request method not allowed!",errMsg408:"Network request timed out!",errMsg500:"Server error, please contact the administrator!",errMsg501:"The network is not implemented!",errMsg502:"Network Error!",errMsg503:"The service is unavailable, the server is temporarily overloaded or maintained!",errMsg504:"Network timeout!",errMsg505:"The http version does not support the request!"},app:{logoutTip:"Reminder",logoutMessage:"Confirm to exit the system?",menuLoading:"Menu loading..."},errorLog:{tableTitle:"Error log list",tableColumnType:"Type",tableColumnDate:"Time",tableColumnFile:"File",tableColumnMsg:"Error message",tableColumnStackMsg:"Stack info",tableActionDesc:"Details",modalTitle:"Error details",fireVueError:"Fire vue error",fireResourceError:"Fire resource error",fireAjaxError:"Fire ajax error",enableMessage:"Only effective when useErrorHandle=true in `/src/settings/projectSetting.ts`."},exception:{backLogin:"Back Login",backHome:"Back Home",subTitle403:"Sorry, you don't have access to this page.",subTitle404:"Sorry, the page you visited does not exist.",subTitle500:"Sorry, the server is reporting an error.",noDataTitle:"No data on the current page.",networkErrorTitle:"Network Error",networkErrorSubTitle:"Sorry\uFF0CYour network connection has been disconnected, please check your network!"},lock:{unlock:"Click to unlock",alert:"Lock screen password error",backToLogin:"Back to login",entry:"Enter the system",placeholder:"Please enter the lock screen password or user password"},login:{backSignIn:"Back sign in",mobileSignInFormTitle:"Mobile sign in",qrSignInFormTitle:"Qr code sign in",signInFormTitle:"Sign in",signUpFormTitle:"Sign up",forgetFormTitle:"Reset password",signInTitle:"Backstage management system",signInDesc:"Enter your personal details and get started!",policy:"I agree to the xxx Privacy Policy",scanSign:"scanning the code to complete the login",loginButton:"Sign in",registerButton:"Sign up",rememberMe:"Remember me",forgetPassword:"Forget Password?",otherSignIn:"Sign in with",loginSuccessTitle:"Login successful",loginSuccessDesc:"Welcome back",accountPlaceholder:"Please input username",passwordPlaceholder:"Please input password",smsPlaceholder:"Please input sms code",mobilePlaceholder:"Please input mobile",policyPlaceholder:"Register after checking",diffPwd:"The two passwords are inconsistent",userName:"Username",password:"Password",confirmPassword:"Confirm Password",email:"Email",smsCode:"SMS code",mobile:"Mobile"}},x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:y}),w={login:"Login",errorLogList:"Error Log"},k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w}),M={dashboard:"Dashboard",about:"About",workbench:"Workbench",analysis:"Analysis"},F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:M}),C={charts:{baiduMap:"Baidu map",aMap:"A map",googleMap:"Google map",charts:"Chart",map:"Map",line:"Line",pie:"Pie"},comp:{comp:"Component",basic:"Basic",transition:"Animation",countTo:"Count To",scroll:"Scroll",scrollBasic:"Basic",scrollAction:"Scroll Function",virtualScroll:"Virtual Scroll",tree:"Tree",treeBasic:"Basic",editTree:"Searchable/toolbar",actionTree:"Function operation",modal:"Modal",drawer:"Drawer",desc:"Desc",lazy:"Lazy",lazyBasic:"Basic",lazyTransition:"Animation",verify:"Verify",verifyDrag:"Drag ",verifyRotate:"Picture Restore",qrcode:"QR code",strength:"Password strength",upload:"Upload",loading:"Loading",time:"Relative Time",cropperImage:"Cropper Image",cardList:"Card List"},editor:{editor:"Editor",jsonEditor:"Json editor",markdown:"Markdown editor",tinymce:"Rich text",tinymceBasic:"Basic",tinymceForm:"embedded form"},excel:{excel:"Excel",customExport:"Select export format",jsonExport:"JSON data export",arrayExport:"Array data export",importExcel:"Import"},feat:{feat:"Page Function",icon:"Icon",tabs:"Tabs",tabDetail:"Tab Detail",sessionTimeout:"Session Timeout",print:"Print",contextMenu:"Context Menu",download:"Download",clickOutSide:"ClickOutSide",imgPreview:"Picture Preview",copy:"Clipboard",msg:"Message prompt",watermark:"Watermark",ripple:"Ripple",fullScreen:"Full Screen",errorLog:"Error Log",tab:"Tab with parameters",tab1:"Tab with parameter 1",tab2:"Tab with parameter 2",menu:"Menu with parameters",menu1:"Menu with parameters 1",menu2:"Menu with parameters 2",ws:"Websocket test",breadcrumb:"Breadcrumbs",breadcrumbFlat:"Flat Mode",breadcrumbFlatDetail:"Flat mode details",breadcrumbChildren:"Level mode",breadcrumbChildrenDetail:"Level mode detail"},flow:{name:"Graphics editor",flowChart:"FlowChart"},form:{form:"Form",basic:"Basic",useForm:"useForm",refForm:"RefForm",advancedForm:"Shrinkable",ruleForm:"Form validation",dynamicForm:"Dynamic",customerForm:"Custom",appendForm:"Append"},iframe:{frame:"External",antv:"antVue doc (embedded)",doc:"Project doc (embedded)",docExternal:"Project doc (external)"},level:{level:"MultiMenu"},page:{page:"Page",form:"Form",formBasic:"Basic Form",formStep:"Step Form",formHigh:"Advanced Form",desc:"Details",descBasic:"Basic Details",descHigh:"Advanced Details",result:"Result",resultSuccess:"Success",resultFail:"Failed",account:"Personal",accountCenter:"Personal Center",accountSetting:"Personal Settings",exception:"Exception",netWorkError:"Network Error",notData:"No data",list:"List page",listCard:"Card list",basic:"Basic list",listBasic:"Basic list",listSearch:"Search list"},permission:{permission:"Permission",front:"front-end",frontPage:"Page",frontBtn:"Button",frontTestA:"Test page A",frontTestB:"Test page B",back:"background",backPage:"Page",backBtn:"Button"},setup:{page:"Intro page"},system:{moduleName:"System management",account:"Account management",account_detail:"Account detail",password:"Change password",dept:"Department management",menu:"Menu management",role:"Role management"},table:{table:"Table",basic:"Basic",treeTable:"Tree",fetchTable:"Remote loading",fixedColumn:"Fixed column",customerCell:"Custom column",formTable:"Open search",useTable:"UseTable",refTable:"RefTable",multipleHeader:"MultiLevel header",mergeHeader:"Merge cells",expandTable:"Expandable table",fixedHeight:"Fixed height",footerTable:"Footer",editCellTable:"Editable cell",editRowTable:"Editable row",authColumn:"Auth column",resizeParentHeightTable:"resizeParentHeightTable"}},v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C});const _={"./en/common.ts":b,"./en/component.ts":f,"./en/layout.ts":S,"./en/sys.ts":x,"./en/routes/basic.ts":k,"./en/routes/dashboard.ts":F,"./en/routes/demo.ts":v};var E={message:i(n({},m(_,"en")),{antdLocale:p}),dateLocale:null,dateLocaleName:"en"};export{E as default};