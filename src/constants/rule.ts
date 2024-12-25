export const NEWS_CLASSIFY_RULE: Record<string, Record<string, ClassifyRule>> = {
  genshin: {
    壁纸: {
      keyword: ['壁纸'],
      include: [],
      exclude: [],
    },
    网页活动: {
      keyword: ['H5', '网页活动'],
      include: [],
      exclude: [],
    },
    OST: {
      keyword: [/OST.*上线/],
      include: [],
      exclude: [],
    },
    新区域展示页: {
      keyword: ['新区域展示页'],
      include: [],
      exclude: [],
    },
    武器活动祈愿: {
      keyword: ['神铸赋形'],
      include: [],
      exclude: [],
    },
    集录祈愿: {
      keyword: ['集录祈愿'],
      include: [],
      exclude: [],
    },
    角色活动祈愿: {
      keyword: ['祈愿即将开启', '祈愿现已开启', '活动祈愿'],
      include: [],
      exclude: [],
    },
    表情包: {
      keyword: ['表情包'],
      include: [],
      exclude: [],
    },
    提瓦特美食札记: {
      keyword: ['提瓦特美食札记'],
      include: [116321, 116345, 116353, 116362, 116381],
      exclude: [],
    },
    生日贺图: {
      keyword: ['生日贺图', /生日.*快乐/],
      include: [116277],
      exclude: [117793],
    },
    同人绘画作品征集: {
      keyword: ['同人绘画作品征集'],
      include: [],
      exclude: [],
    },
    音乐会: {
      keyword: ['音乐会'],
      include: [],
      exclude: [],
    },
    EP: {
      keyword: ['音乐动态视频', '《原神》EP'],
      include: [],
      exclude: [],
    },
    版本PV: {
      keyword: [/\d\.\d版本PV/],
      include: [],
      exclude: [],
    },
    活动汇总: {
      keyword: ['活动汇总'],
      include: [],
      exclude: [],
    },
    前瞻预告: {
      keyword: [/特别节目.*即将开启/, '前瞻直播预告', '前瞻特别节目预告'],
      include: [118577, 118573],
      exclude: [],
    },
    前瞻回顾长图: {
      keyword: [/(前瞻|特别节目).*回顾长图/],
      include: [],
      exclude: [],
    },
    前瞻直播: {
      keyword: ['特别节目'],
      include: [116318],
      exclude: [],
    },
    版本更新说明: {
      keyword: ['更新通知', /版本.*更新说明/, '更新维护预告'],
      include: [],
      exclude: [],
    },
    版本专题页: {
      keyword: ['内容专题页', '先行展示页', '版本内容页'],
      include: [],
      exclude: [],
    },
    版本活动速递: {
      keyword: ['版本活动速递'],
      include: [],
      exclude: [],
    },
    预下载公告: {
      keyword: ['预下载'],
      include: [],
      exclude: [],
    },
    幕后花絮: {
      keyword: ['的幕后', '合作幕后'],
      include: [],
      exclude: [],
    },
    沙雕广告: {
      keyword: ['原来你也玩原神'],
      include: [],
      exclude: [],
    },
    漫画: {
      keyword: ['条漫', '四格漫画'],
      include: [],
      exclude: [],
    },
    声优小剧场: {
      keyword: ['声优小剧场', '璃月雅集'],
      include: [],
      exclude: [],
    },
    寻味之旅: {
      keyword: ['寻味之旅'],
      include: [],
      exclude: [],
    },
    PV短片: {
      keyword: ['PV短片'],
      include: [],
      exclude: [],
    },
    动画短片: {
      keyword: ['动画短片'],
      include: [],
      exclude: [],
    },
    风物集短片: {
      keyword: ['风物集短片'],
      include: [],
      exclude: [],
    },
    流光拾遗之旅: {
      keyword: ['流光拾遗之旅'],
      include: [],
      exclude: [],
    },
    CM短片: {
      keyword: ['CM'],
      include: [],
      exclude: [],
    },
    衣装PV: {
      keyword: ['衣装PV'],
      include: [],
      exclude: [],
    },
    过场动画: {
      keyword: ['过场动画'],
      include: [],
      exclude: [],
    },
    剧情PV: {
      keyword: ['剧情PV'],
      include: [],
      exclude: [],
    },
    角色PV: {
      keyword: ['角色PV'],
      include: [116213, 116322],
      exclude: [],
    },
    角色演示: {
      keyword: ['全新角色展示', '角色演示', '角色预告'],
      include: [],
      exclude: [],
    },
    拾枝杂谈: {
      keyword: ['拾枝杂谈'],
      include: [],
      exclude: [],
    },
    角色趣闻小记: {
      keyword: ['小记'],
      include: [],
      exclude: [],
    },
    角色技能演示: {
      keyword: ['角色技能演示', '角色技能展示'],
      include: [],
      exclude: [],
    },
    角色介绍: {
      keyword: ['角色介绍'],
      include: [],
      exclude: [],
    },
    玩法介绍: {
      keyword: ['小贴士', '玩法介绍', '玩法说明', '玩法小贴士'],
      include: [],
      exclude: [],
    },
    开发组座谈会: {
      keyword: ['开发组座谈会'],
      include: [],
      exclude: [],
    },
    开发者共研计划: {
      keyword: ['开发者共研计划'],
      include: [],
      exclude: [],
    },
    传说任务说明: {
      keyword: ['传说任务说明', '传说任务即将开启'],
      include: [],
      exclude: [],
    },
    主线任务说明: {
      keyword: [/魔神任务.*即将开启/, /开启.*魔神任务/],
      include: [],
      exclude: [],
    },
    联动信息: {
      keyword: ['×原神', 'x 原神', '原神×', '原神 x', '联名', '联动'],
      include: [118376],
      exclude: [118466],
    },
    周边信息: {
      keyword: ['周边上新', '原神旗舰店'],
      include: [],
      exclude: [],
    },
    PV: {
      keyword: ['PV'],
      include: [],
      exclude: [116497, 116506],
    },
  },
  starrail: {
    OP: {
      keyword: ['OP'],
      include: [],
      exclude: [],
    },
    版本PV: {
      keyword: [/\d\.\d版本PV/],
      include: [],
      exclude: [],
    },
    前瞻直播: {
      keyword: ['前瞻特别节目'],
      include: [],
      exclude: [],
    },
    角色PV: {
      keyword: ['角色PV'],
      include: [],
      exclude: [],
    },
    千星纪游PV: {
      keyword: ['千星纪游PV'],
      include: [],
      exclude: [],
    },
    走近星穹: {
      keyword: ['走近星穹'],
      include: [],
      exclude: [],
    },
    动画短片: {
      keyword: ['动画短片'],
      include: [],
      exclude: [],
    },
    PV: {
      keyword: ['PV', '动画CM'],
      include: [],
      exclude: [123201],
    },
    EP: {
      keyword: ['EP'],
      include: [],
      exclude: [],
    },
    遥远星球之歌: {
      keyword: ['遥远星球之歌'],
      include: [],
      exclude: [],
    },
    星穹研习会: {
      keyword: ['星穹研习会'],
      include: [],
      exclude: [],
    },
    版本更新维护预告: {
      keyword: ['版本更新维护预告'],
      include: [],
      exclude: [],
    },
    版本更新说明: {
      keyword: ['版本更新说明'],
      include: [],
      exclude: [],
    },
    开拓任务说明: {
      keyword: ['开拓任务说明'],
      include: [],
      exclude: [],
    },
    专题展示页: {
      keyword: ['专题展示页'],
      include: [],
      exclude: [],
    },
    光锥活动跃迁: {
      keyword: ['光锥活动跃迁', '流光定影'],
      include: [],
      exclude: [],
    },
    角色活动跃迁: {
      keyword: ['角色活动跃迁', /限定5星角色.*概率UP/],
      include: [],
      exclude: [],
    },
  },
  zzz: {
    版本PV: {
      keyword: ['版本PV'],
      include: [],
      exclude: [],
    },
    版本更新说明: {
      keyword: ['更新说明'],
      include: [],
      exclude: [],
    },
    版本更新通知: {
      keyword: [/版本.*更新通知/],
      include: [],
      exclude: [],
    },
    前瞻情报总览: {
      keyword: ['情报总览', '回顾长图'],
      include: [],
      exclude: [],
    },
    前瞻预告: {
      keyword: ['前瞻特别节目预告'],
      include: [],
      exclude: [],
    },
    前瞻特别节目: {
      keyword: ['前瞻特别节目'],
      include: [],
      exclude: [],
    },
    丽都修葺漫谈: {
      keyword: ['丽都修葺漫谈'],
      include: [],
      exclude: [],
    },
    代理人档案: {
      keyword: ['代理人档案'],
      include: [],
      exclude: [],
    },
    代理人机制介绍: {
      keyword: ['代理人机制介绍'],
      include: [],
      exclude: [],
    },
    代理人采访手记: {
      keyword: ['采访手记'],
      include: [],
      exclude: [],
    },
    角色头像: {
      keyword: ['角色头像'],
      include: [],
      exclude: [],
    },
    角色展示: {
      keyword: ['角色展示'],
      include: [],
      exclude: [],
    },
    代理人战斗情报: {
      keyword: ['代理人战斗情报'],
      include: [],
      exclude: [],
    },
    角色PV: {
      keyword: ['角色PV'],
      include: [],
      exclude: [],
    },
    动画短片: {
      keyword: ['动画短片'],
      include: [],
      exclude: [],
    },
    过场动画: {
      keyword: ['过场动画'],
      include: [],
      exclude: [],
    },
    PV: {
      keyword: ['PV'],
      include: [],
      exclude: [],
    },
    EP上架: {
      keyword: [/EP.*上架/],
      include: [],
      exclude: [],
    },
    EP: {
      keyword: ['EP', 'MV'],
      include: [],
      exclude: [],
    },
    主线说明: {
      keyword: [/主线.*开启/],
      include: [],
      exclude: [],
    },
    独家视界说明: {
      keyword: ['独家视界开启'],
      include: [],
      exclude: [],
    },
    代理人秘闻说明: {
      keyword: ['代理人秘闻开启'],
      include: [],
      exclude: [],
    },
    生日贺图: {
      keyword: ['生日快乐'],
      include: [],
      exclude: [],
    },
    过塑手账: {
      keyword: ['过塑手账'],
      include: [],
      exclude: [],
    },
    丽都放大镜: {
      keyword: ['丽都放大镜'],
      include: [],
      exclude: [],
    },
    新艾利都探店: {
      keyword: ['新艾利都探店'],
      include: [],
      exclude: [],
    },
    六分街街头异闻: {
      keyword: ['六分街街头异闻'],
      include: [],
      exclude: [],
    },
    邦布们的说明书: {
      keyword: ['邦布们的说明书'],
      include: [],
      exclude: [],
    },
    表情包: {
      keyword: ['表情包'],
      include: [],
      exclude: [],
    },
    活动说明: {
      keyword: ['活动说明'],
      include: [],
      exclude: [],
    },
    网页活动: {
      keyword: ['网页活动', 'H5'],
      include: [],
      exclude: [],
    },
    电玩店上新: {
      keyword: ['电玩店上新'],
      include: [],
      exclude: [],
    },
    调频说明: {
      keyword: ['调频说明'],
      include: [],
      exclude: [],
    },
    音擎上新: {
      keyword: ['音擎上新'],
      include: [],
      exclude: [],
    },
    邦布上新: {
      keyword: ['卓越搭档'],
      include: [],
      exclude: [],
    },
    壁纸: {
      keyword: ['壁纸'],
      include: [],
      exclude: [],
    },
    周边信息: {
      keyword: ['新品情报'],
      include: [],
      exclude: [],
    },
  },
}
