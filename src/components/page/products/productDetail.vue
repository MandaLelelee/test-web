<template>
    <div>
      <header-photo></header-photo>
      <div class="detailAll" v-for="( item , index) in productDetail" :key="index" v-if="currentId(item)">
        <div class="goBack"><a @click="$router.back()">产品介绍>>{{item.group}}</a></div>
      <div class="detailPhoto"><img :src="item.photoUrl" :alt="item.alt"></div><!--
      --><div class="detailTitle">
        <div class="detailName">
          <h2> {{item.productName}}</h2>
        </div>
        <div class="detail">
          {{item.detail}}
        </div>
      </div>
      <div class="detailText">
        <div class="detailTextTitle">详细信息</div>
        <div v-html="item.detailText">{{item.detailText}}</div>
      </div>
    </div>
    </div>
</template>

<script>
import HeaderPhoto from '../../modules/sloganPhoto'
export default {
  name: 'productDetail',
  components: {HeaderPhoto},
  data: function () {
    return {
      productDetail: [
        /* Adobe 2-1 */
        {
          'productName': 'adobe',
          'group': 'adobe',
          'id': '2-1',
          'productId': '2-1-1',
          'photoUrl': require('../../../assets/img/homeproductPhotos/adobe.png'),
          'alt': 'adobe',
          'detail': '0000000',
          'detailText': '00000000000000000000'
        },
        /* Autodesk 2-2 */
        {
          'productName': 'threeDSMAX',
          'group': 'Autodesk',
          'id': '2-2',
          'productId': '2-2-1',
          'photoUrl': require('../../../assets/img/productsPhotos/3DMax.jpg'),
          'alt': '3DS MAX',
          'detail': '3D 建模、动画和渲染软件',
          'detailText': '<div><p><span style="color: rgb(102, 102, 102); line-height: 14.4px; font-family: Arial, sans-serif; font-size: 13.71px; background-color: rgb(255, 255, 255);">利用 3ds Max® 三维建模、动画和渲染软件快速自定义、进行协作以及创建三维内容。它为娱乐及专业人士带来全新的、紧贴用户所需的功能以及增强。</span></p><div id="metinfo_additional"></div></div>'
        },
        {
          'productName': 'AutoCAD',
          'group': 'Autodesk',
          'id': '2-2',
          'productId': '2-2-2',
          'photoUrl': require('../../../assets/img/productsPhotos/AutoCAD.jpg'),
          'alt': 'AutoCAD',
          'detail': '使用 AutoCAD® 软件中高效的创新工具创建逼真的设计并提高协作能力',
          'detailText': '<div><p>前沿设计\t </p><div class="text section" style="color: rgb(102, 102, 102); font-family: Frutiger, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);"><p class="wd-font-19 wd-light" style="font-size: 1.9rem;">\t\t使用 AutoCAD® 软件中高效的创新工具创建逼真的设计并提高协作能力。\t </p><ul class=" list-paddingleft-2" style="font-size: 1.4rem;"><li><p>TrustedDWG™ 技术使您的作品实现共享\t\t </p></li><li><p>\t\t\t利用相互关联的桌面和移动解决方案完成工作\t\t </p></li><li><p>\t\t\t当您订购固定期限的使用许可时将获得 AutoCAD 360 Pro 的移动应用程序</p></li></ul></div><p>&nbsp;</p><div id="metinfo_additional"></div></div>'
        },
        /* Microsoft 2-3 */
        {
          'productName': 'Windows',
          'group': 'Microsoft',
          'id': '2-3',
          'productId': '2-3-1',
          'photoUrl': require('../../../assets/img/productsPhotos/windows.jpg'),
          'alt': 'Windows',
          'detail': '到迄今为止最安全的Windows系统',
          'detailText': '<div><p>新增内容\t </p><div><p class="Body dark" style="color: rgb(47, 47, 47); font-family: inherit; font-weight: inherit; vertical-align: baseline;">Windows 10 专业版可让您和企业灵活自由地成就一番事业。它可跨所有设备工作，您在享受移动生活的同时，还可以选择符合自己预算的设备。它注重生产效率，能够跟上您孜孜不倦的节奏。它具有企业级安全性，为您的业务数据提供保护。并且，您只需轻轻一触即可对其进行管理，无需大量 IT 投资。综上所述，它可提供亲切熟悉且轻松高效的体验，让您全神贯注地投入到工作中。\t\t </p></div><h2 class="wb-pb-5 Subheader dark" style="color: rgb(0, 32, 80);" >\t\t熟悉而高效的用户体验\t </h2><p class="Body dark "><br></p><p>Windows 10 可跨 PC、平板电脑和手机提供亲切熟悉且轻松高效的体验。该体验可提供熟悉的 Windows 桌面并结合了最新的改进功能，从一开始就让您成为专家，并且灵活自由地成就一番事业。\t </p><h2 class="wb-pb-5 Subheader dark" style="color: rgb(0, 32, 80); font-family: wf_segoe-ui_light, wf_segoe-ui_normal,;" segoe="" lucida="">\t\t企业级安全性\t </h2><p class="Body dark " style="color: rgb(47, 47, 47); font-family:;" segoe=""><br></p><p style="font-family:;" segoe="">Windows 10 旨在为世界上规模最大、需求最苛刻的企业和政府提供帮助，保障他们的数据、设备和身份安全无虞。相同级别的安全性同样会提供给您的企业，让您高枕无忧，因为您的企业更加安全。\t </p><h2 class="wb-pb-5 Subheader dark" style="color: rgb(0, 32, 80); font-family: wf_segoe-ui_light, wf_segoe-ui_normal,;" segoe="" lucida="">\t\t轻触管理\t </h2><p class="Body dark " style="color: rgb(47, 47, 47); font-family:;" segoe=""><br></p><p style="font-family:;" segoe="">Windows 10 旨在为世界上规模最大、需求最苛刻的企业和政府提供帮助，保障他们的数据、设备和身份安全无虞。相同级别的安全性同样会提供给您的企业，让您高枕无忧，因为您的企业更加安全。\t </p><h2 class="wb-pb-10 Subheader dark" style="color: rgb(0, 32, 80); font-family: wf_segoe-ui_light, wf_segoe-ui_normal,;" segoe="" lucida="">\t\t系列创新设备\t </h2><p class="Body dark " style="color: rgb(47, 47, 47); font-family:;" segoe=""><br></p><p style="font-family:;" segoe="">\t\t设备制造商提供经济实惠的创新，助力业务发展。我们提供了一系列新型 Windows 个人设备，可帮助您经济高效地出色完成工作。Windows 10 旨在与您已有的一系列设备配合使用，并支持新设备（包括 2 合 1 设备、壁挂式设备以及新的全息接口）的功能。Windows 10 开创了创作、学习、协作和可视化的新方法。</p><p>&nbsp;</p><div id="metinfo_additional"></div></div>'
        },
        {
          'productName': 'Office365',
          'group': 'Microsoft',
          'id': '2-3',
          'productId': '2-3-2',
          'photoUrl': require('../../../assets/img/productsPhotos/office365.jpg'),
          'alt': 'office365',
          'detail': '你熟悉的 Office，外加更便捷的协作工具，一切只为帮助你顺利完成更多工作',
          'detailText': '<div><p>团队合作专用</p><p style="color: rgb(102, 102, 102); font-family: wf_segoe-ui_normal, wf_segoe-ui_semilight, wf_segoe-ui_light, Arial, sans-serif; font-size: 17.3px;">Office 2016 减少了共同创造过程中出现的摩擦，更方便用户共享文档、协同工作以及使用共同创作、IM、语音和视频来完成工作。</p><div class="ms-row" style="text-align: center; color: rgb(102, 102, 102); line-height: 20.76px; font-family: wf_segoe-ui_normal, wf_segoe-ui_semilight, wf_segoe-ui_light, Arial, sans-serif; font-size: 17.3px; display: flex; white-space: normal; box-sizing: border-box; flex-wrap: wrap; align-items: stretch; -webkit-box-align: stretch;" ms.cmpnm="9"><div class="col-1-1" style="margin: 0px; font-size: calc(14.9px + 0.22vw);"><h5 style="color: rgb(0, 120, 215); font-family: wf_segoe-ui_light, wf_segoe-ui_semilight, wf_segoe-ui_normal, Arial, sans-serif; font-size: calc(17.6px + 1.18vw); font-weight: inherit; text-align: left;"><span style="font-size: 18px;">你熟悉且喜爱的 Office 增加了新的应用程序，并且现在可以在你喜爱的多种设备上使用\t </span></h5><p><br></p></div></div><div class="ms-row" style="text-align: center; color: rgb(102, 102, 102); line-height: 20.76px; font-family: wf_segoe-ui_normal, wf_segoe-ui_semilight, wf_segoe-ui_light, Arial, sans-serif; font-size: 17.3px; display: flex; white-space: normal; box-sizing: border-box; flex-wrap: wrap; align-items: stretch; -webkit-box-align: stretch;" ms.cmpnm="10"><div class="col-1-4" style="margin: 0px; font-size: calc(14.9px + 0.22vw);"><h3 style="font-size: calc(16.9px + 0.22vw); font-weight: inherit; text-align: left;"><img title="在多种设备上使用" class="mscom-image pmg-display-ib xs-pmg-ph-0010 pmg-vab" id="pmg-access-documents" style="padding-right: 10px !important; padding-left: 0px !important; vertical-align: bottom !important; display: inline-block !important; max-width: 100%; box-sizing: inherit;" alt="该图标上显示一台便携式计算机和一部智能手机，表示可以在多种设备上使用" src="https://c.s-microsoft.com/zh-cn/CMSImages/Icon_AcrossDevice_45x25.png?version=cfce8cb8-b55d-ee71-687a-9c6e26b50424" ms.interactiontype="42"><span style="font-size: 16px;">在多种设备上使用\t\t </span></h3><p><br></p><p style="font-size: calc(14.9px + 0.22vw); text-align: left;">\t\t\t可以使用从 PC 或 Mac 到 Windows、Apple® 和 Android™ 手机、平板电脑等设备，随时随地访问你的文档和工作，且以全保真度进行查看和编辑。</p><p style="font-size: calc(14.9px + 0.22vw); text-align: left;"><br>\t\t </p></div><div class="col-1-4" style="margin: 0px; font-size: calc(14.9px + 0.22vw);"><h3 style="font-size: calc(16.9px + 0.22vw); font-weight: inherit; text-align: left;"><img title="共同创作" class="mscom-image pmg-display-ib xs-pmg-ph-0010 pmg-vab" id="pmg-work-together" style="padding-right: 10px !important; padding-left: 0px !important; vertical-align: bottom !important; display: inline-block !important; max-width: 100%; box-sizing: inherit;" alt="该图标上显示一支铅笔，代表共同创作" src="https://c.s-microsoft.com/zh-cn/CMSImages/Icon_CoAuthoring_25x25.png?version=70c37718-4006-643f-933d-c99cfa24fc60" ms.interactiontype="42"><span style="font-size: 16px;">共同创作\t</span></h3><p><br></p><p style="font-size: calc(14.9px + 0.22vw); text-align: left;">\t\t\t在 Word、PowerPoint 和 OneNote 中协作是前所未有的轻松。Word 中的实时键入功能<span style="line-height: 0; font-size: 12.97px; vertical-align: baseline;">1</span>可让你在其他人进行编辑时看到编辑内容。</p><p style="font-size: calc(14.9px + 0.22vw); text-align: left;"><br>\t\t </p></div><div class="col-1-4" style="margin: 0px; font-size: calc(14.9px + 0.22vw);"><h3 style="font-size: calc(16.9px + 0.22vw); font-weight: inherit; text-align: left;"><img title="在线会议" class="mscom-image pmg-display-ib xs-pmg-ph-0010 pmg-vab" id="pmg-work-like-in-one-room" style="padding-right: 10px !important; padding-left: 0px !important; vertical-align: bottom !important; display: inline-block !important; max-width: 100%; box-sizing: inherit;" alt="该图标上显示一条聊天消息，代表在线会议" src="https://c.s-microsoft.com/zh-cn/CMSImages/Icon_OnlineMeetings_23x25.png?version=66742f26-13a7-251c-31c2-1707017dbce4" ms.interactiontype="42"><span style="font-size: 16px;">在线会议</span></h3><p><br></p><p style="font-size: calc(14.9px + 0.22vw); text-align: left;">\t\t\t虽然你们并不在一个房间里，但是可以像就在一个房间里那样工作。使用 Skype for Business 进行高清视频会议<span style="line-height: 0; font-size: 12.97px; vertical-align: baseline;">2</span>、共同创作、桌面共享、演示和 IM 以从别处进行你的会议。</p><p style="font-size: calc(14.9px + 0.22vw); text-align: left;"><br>\t\t </p></div><div class="col-1-4" style="margin: 0px; font-size: calc(14.9px + 0.22vw);"><h3 style="font-size: calc(16.9px + 0.22vw); font-weight: inherit; text-align: left;"><img title="智能附件" class="mscom-image pmg-display-ib xs-pmg-ph-0010 pmg-vab" id="pmg-attach-documents" style="padding-right: 10px !important; padding-left: 0px !important; vertical-align: bottom !important; display: inline-block !important; max-width: 100%; box-sizing: inherit; float: left;" alt="该图标上显示一个回形针，代表智能附件" src="https://c.s-microsoft.com/zh-cn/CMSImages/Icon_SmartAttachement_12x25.png?version=e7600f4c-047c-bcc7-0b4a-bade8fa8464c" ms.interactiontype="42"><span style="font-size: 16px;">智能附件\t</span></h3><p><br></p><p style="font-size: calc(14.9px + 0.22vw); text-align: left;">\t\t\t将存储在 OneDrive for Business 或 SharePoint 中的文档附加到电子邮件，Outlook 便会自动配置邮件收件人的权限并将最新版本存储在一个位置。</p><p style="font-size: calc(14.9px + 0.22vw); text-align: left;"><br>\t\t </p></div></div><h5 style="color: rgb(0, 120, 215); font-family: wf_segoe-ui_light, wf_segoe-ui_semilight, wf_segoe-ui_normal, Arial, sans-serif; font-size: calc(17.6px + 1.18vw); font-weight: inherit;"><span style="font-size: 18px;">Office 2016 可为 IT 提供更多控制权，让他们的表现更出色。</span></h5><p><br></p><h5 class="pmg-txt-b no-margin-bottom" style="color: rgb(102, 102, 102); font-family: wf_segoe-ui_semibold, wf_segoe-ui_normal, Arial, sans-serif; font-size: calc(14.9px + 0.22vw);">\t集中控制</h5><p style="color: rgb(102, 102, 102); font-family: wf_segoe-ui_normal, wf_segoe-ui_semilight, wf_segoe-ui_light, Arial, sans-serif; font-size: 17.3px;">\t数据丢失保护、多重身份验证和权限管理可让管理员集中控制关键的安全性、隐私和合规性功能。</p><h5 class="pmg-txt-b no-margin-bottom" style="color: rgb(102, 102, 102); font-family: wf_segoe-ui_semibold, wf_segoe-ui_normal, Arial, sans-serif; font-size: calc(14.9px + 0.22vw);">\t灵活的即点即用部署</h5><p style="color: rgb(102, 102, 102); font-family: wf_segoe-ui_normal, wf_segoe-ui_semilight, wf_segoe-ui_light, Arial, sans-serif; font-size: 17.3px;">\t借助增强的分发和网络管理功能，IT 现在可以更好地控制何时以及如何分发更新。</p><h5 class="pmg-txt-b no-margin-bottom" style="color: rgb(102, 102, 102); font-family: wf_segoe-ui_semibold, wf_segoe-ui_normal, Arial, sans-serif; font-size: calc(14.9px + 0.22vw);">Outlook 性能得到提高</h5><p style="color: rgb(102, 102, 102); font-family: wf_segoe-ui_normal, wf_segoe-ui_semilight, wf_segoe-ui_light, Arial, sans-serif; font-size: 17.3px;">\t增强的连接、更好的网络性能和更快的电子邮件下载可让用户更满意，技术支持电话呼叫更少</p><p><br></p><div id="metinfo_additional"></div></div>'
        },
        /* Dr.web */
        {
          'productName': 'Dr.web',
          'group': 'Dr.web',
          'id': '2-4',
          'productId': '2-4-1',
          'photoUrl': require('../../../assets/img/homeproductPhotos/DrWeb.jpg'),
          'alt': 'Dr.web(大蜘蛛)',
          'detail': '全球最早的反病毒产品',
          'detailText': '333333333333333333'
        }
      ]
    }
  },
  methods: {
    currentId (item) {
      let currentId = this.$route.query.productId
      if (item.productId === currentId) {
        return item.productId
      }
    }
  }
}
</script>

<style scoped>
@import "../../../assets/css/products/productDetail.css";
</style>
