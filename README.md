# Ethereal Style
> 让你享受阅读文献的乐趣！

<img src="addon/chrome/content/icons/favicon.png" width="36px" height="36px">

[![Using Zotero Plugin Template](https://img.shields.io/badge/Using-Zotero%20Plugin%20Template-blue?style=flat-round&logo=github)](https://github.com/windingwind/zotero-plugin-template)
[![Latest release](https://img.shields.io/github/v/release/MuiseDestiny/zotero-style)](https://github.com/MuiseDestiny/zotero-style/releases)
![Release Date](https://img.shields.io/github/release-date/MuiseDestiny/zotero-style?color=9cf)
[![License](https://img.shields.io/github/license/MuiseDestiny/zotero-style)](https://github.com/MuiseDestiny/zotero-style/blob/master/LICENSE)
![Downloads latest release](https://img.shields.io/github/downloads/MuiseDestiny/zotero-style/latest/total?color=yellow)


You can upload your screenshots [here](https://github.com/MuiseDestiny/zotero-style/issues/48).

[✨ Download the latest xpi file](https://gitee.com/MuiseDestiny/plugins/raw/master/zotero-style.xpi)


[中文文档](https://www.notion.so/Zotero-Style-bc2aebbbb6df4b7baa858e376e4fc5be) |
[视频教程](https://www.bilibili.com/video/BV1ZP411p7ko/?spm_id_from=333.999.0.0)
---
## 关于更新/About Update

> 请使用下图，Zotero官方提供的更新方式更新。小版本将不在Github发布Release，你始终可以通过下图方式获取所有版本（大/小）更新。


![image](https://github.com/user-attachments/assets/87a6737c-4789-4195-a46e-d4b8bbb20b79)


## TODO

- [ ] 视图组、颜色设置等参与同步
- [ ] 主题切换

## Columns

> This plugin modifies some of Zotero's existing columns and adds some interesting ones, and I'll introduce them one by one.



<img src="https://user-images.githubusercontent.com/51939531/220922783-b7d78b5f-6cc3-4aff-8581-2e6ca341aec5.gif" width="100%" height="100%">

![graph-view](https://user-images.githubusercontent.com/51939531/226494857-d14f275a-3ad1-495e-a0c6-d2f971bc42aa.gif)

### Title

> As the background of title, reading progress visually reflect the distribution of your reading time of each page for the PDF under a item, the darker the color the longer the reading time.

### Progress

> It can visually represent the annotation word count of each page of the PDF corresponding to a item.

### Read/Unread Status
> Unread paper is shown in bold, and read paper is not bolded.This is the same as the read button in RSS.

<details>
<summary>How to mark?</summary>

|Scenario|Screenshot|
|--|--|
|Zotero Item Pane (plugin's function)|![image](https://github.com/MuiseDestiny/zotero-style/assets/51939531/41bb9c79-317f-4fd9-98f1-8a4abf5b5439)|
|Zotero RSS (Zotero's function)|![image](https://github.com/MuiseDestiny/zotero-style/assets/51939531/73143f9c-2f8a-4c0d-b741-6bcdbdebe9fa)|

</details>

### Tags

> The tags that were originally displayed before the title are separated into this separate `Tags` column.

### #Tags

> It differs from tags column in that it renders the text directly. You can create a tag that starts with `#` to try it out.

<details>

<summary>Column Settings</summary>


 **Prefix**

|Prefix|Meaning|
|--|--|
| # | Show all tags that start with `#`, but will remove the `#` prefix. |
|~~/ | All tags except those beginning with `/` are displayed |
|                      /^#(.+)/                        | Use the entered regular expression to match the tag, and `(.+)` is the actual displayed tag content. Multiple `(.+)` will be automatically joined. |

</details>


### Publication Tags

> It is similar to #Tags, but its tags can generate automatically, which represent the rank of a publication.

<details>
<summary>Column Settings</summary>

<img src="https://user-images.githubusercontent.com/51939531/223394517-19cf5bf8-b5e3-402a-8da7-5952b1fd062e.png" width="50%" height="50%">


 **Fileds**

  You can choose fields to display by editing `Fields` field in Column Settings. Check the table below for field definitions.

| Field | Name | Source |
| --- | --- | --- |
|ccf|  |《中国计算机学会推荐国际学术会议和期刊、中文科技期刊目录-2019、计算领域高质量科技期刊分级目录》，数据集从高到低分为：A(T1), B(T2), C(T3)。|
|swufe| |《西南财经大学学术期刊目录2018》，数据集从高到低分为：A+, A, B, C。|
|cufe| |《中央财经大学期刊目录（2019版）》，数据集从高到低分为：AAA, AA, A。|
|ssci| |《JCR-分区-影响因子-2022(2022.6.28).pdf》，数据集从高到低分为：Q1, Q2, Q3, Q4。|
|sci| |《JCR-分区-影响因子-2022(2022.6.28).pdf》，数据集从高到低分为：Q1, Q2, Q3, Q4。|
|sciif| |《JCR-分区-影响因子-2022(2022.6.28).pdf》，easyScholar将影响因子从10, 4, 2, 1, 0分为5个等级。|
|jci| |《JCR-分区-影响因子-2022(2022.6.28).pdf》，easyScholar将JCI指数从3, 1, 0.5, 0 分为4个等级。|
|sciif5| |由于还未收集到最新5年影响因子数据，所以仍沿用2021年的数据。easyScholar将5年影响因子从10, 4, 2, 1, 0分为5个等级。|
|ahci| |《JCR-分区-影响因子-2022(2022.6.28).pdf》。该数据集只有一个等级。|
|fdu| |《复旦大学学位与研究生教育国内期刊指导目录（2018年1月修订）》，数据集从高到低分为：A, B。|
|sjtu| |《上海交通大学SCISCIE论文A档B档期刊分类目录及其他刊物等级参考(2018.5)》，数据集从高到低分为：A, B。|
|xmu| |《厦门大学人文社科核心学术期刊目录（2017）》，该数据集只有一个等级：一类。|
|cssci| |《CSSCI来源期刊、扩展版目录2021-2022》。数据集从高到低分为：CSSCI， CSSCI扩展版。|
|ruc| |《中国人民大学核心期刊目录2017》，数据集从高到低分为：A+, A, A-, B。|
|cscd| |《中国科学引文数据库来源期刊列表（2021-2022 年度）》，数据集从高到低分为： 核心库，扩展库。|
|swjtu| |《西南交通大学学术期刊分级目录（2017年修订版）》，数据集从高到低分为：A++, A+, A, B+, B。|
|uibe| |《对外经济贸易大学科研奖励外文核心期刊专题分类目录》,数据集从高到低分为： A, A-, B。|
|pku| |《中文核心期刊要目总览》（2020年版）》，该数据集只有一个等级。|
|xdu| |《关于发布《西安电子科技大学高水平期刊目录（2021年）》的通知》，数据集从高到低分为： 一类贡献度，二类贡献度。|
|sdufe| |《山东财经大学学术期刊分类目录》，数据集从高到低分为： 特类期刊, A1, A2, B, C。|
|eii| EI检索 |《CPXSourceList062022.xlsx》，该数据集只有一个等级。|
|nju| |《南京大学超一流、学科群一流、SCI A区和B区期刊目录.xlsx》，数据集从高到低分为： 超一流期刊（学科群一流期刊）, A, B。|
|zhongguokejihexin| 中国科技核心期刊目录 |《2021年版中国科技核心期刊目录.pdf》, 该数据集只有一个等级。|
|cqu| |《重庆大学人文社会科学类、自然科学类期刊分级目录》，数据集从高到低分为：A（权威期刊）， B（重要期刊）， C。|
|hhu| |《河海大学高质量论文期刊及学术会议目录（自然科学类，不含计算机科学与技术、软件工程学科）》，数据集从高到低分为：A类，B类，C类。|
|ajg| |《ABS-2021.pdf》英文约1700种。数据集从高到低分为：4*, 4, 3, 2, 1 |
|xju| |《新疆大学2020版自然科学、人文社科学术期刊目录，2021年人文社科学术期刊调整目录》。数据集从高到低分为：一区， 二区， 三区，四区， 五区。|
|cug| |《中国地质大学科技类、人文社科类期刊分区总汇》。数据集从高到低分为：T1, T2, T3, T4, T5。|
|fms| | FMS管理科学高质量期刊推荐列表(2022) 。数据集从高到低分为：A(T1), B(T2), C, D。|
|scu| | 《四川大学-高质量科技期刊及学术会议分级参考方案（暂行）-2021年4月.xlsx》。数据集从高到低分为：A, A-, B, C, D, E。|
|utd24| |《互联网公开收集》， 该数据集只有一个等级。|
|ft50| |《互联网公开收集》 ，该数据集只有一个等级。|
|sciUp| 中科院升级版 | 微信小程序：《中科院文献情报分区中心表2022年12月最新》数据集从高到低分为1区，2区，3区，4区。|
|sciBase| 中科院基础版 | 微信小程序：《中科院文献情报分区中心表2021年12月最新》数据集从高到低分为1区，2区，3区，4区。|
|sciwarn| 中科院预警 | 《国际期刊预警名单(试行)-2021.12.31》 ，该数据集只有一个等级。|
|cju| | 《长江大学自然科学高质量期刊（中国期刊）分级目录（2021版）.pdf》数据集从高到低分为T1, T2, T3。|
|zju| | 《浙江大学国内学术期刊分级目录指南·2020版.pdf》数据集从高到低分为国内一级学术期刊，国内一级核心期刊。|

If you are using a custom dataset, you must locate the custom field definition of the dataset and fill it in the `Fields` section.



**Map**

You can customise tags by editing `Map` field in Column Settings, using string or regex to replace tags to your desired format.
You can refer to [this link](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions) or any other tutorials for regex syntax.

Most of tags comprises of two parts: field name and value, separated by a space. Some tags are field only.
**NB**: you will need to alter field name and value respectively:

Here are some examples:

SCI:

```ini
SCI=, 
/SCIIF/=IF, 
```

EI:

```ini
EI检索=EI, 
```

Decrease decimal:

```ini
/^(\d+)\.(\d{1})\d*$/=$1.$2, 
```

Chinese 中文检索：

```ini
北大中文核心=北核, 
```

Chinese Academy of Sciences (CAS) warnings 中科院预警：

```ini
SCIWARN=🚫, 
```

CAS quartiles 中科院分区升级版:

```ini
/医学(\d+)区/=医$1, 
/生物学(\d+)区/=生$1, 
/农林科学(\d+)区/=农$1, 
/环境科学与生态学(\d+)区/=环$1, 
/化学(\d+)区/=化$1, 
/工程技术(\d+)区/=工$1, 
/数学(\d+)区/=数$1, 
/物理与天体物理(\d+)区/=物$1, 
/地球科学(\d+)区/=地$1, 
/材料科学(\d+)区/=材$1, 
/计算机科学(\d+)区/=计$1, 
/经济学(\d+)区/=经$1, 
/法学(\d+)区/=法$1, 
/管理学(\d+)区/=管$1, 
/心理学(\d+)区/=心$1, 
/人文科学(\d+)区/=人$1, 
/教育学(\d+)区/=教$1, 
/综合性期刊(\d+)区/=综$1, 
```

</details>

### Rating

> When you select a item, item's rating convert to a wating state, such as five points. Then you can click one point to finish your rating quickly.

## View Group

> This addon and other addons may expand Zotero's columns, but the screen size is limit. We often need to show/hide columns frequently, and View Group makes it easier and quicker.

<details>

<summary>Usage</summary>

![View Group](https://user-images.githubusercontent.com/51939531/221079177-0d73beed-d63f-4935-a380-f09667d0800c.png)

| Operation | Target | Do |
| --- | --- | --- |
| left click | a view | switch to this view |
| Long press | a view | update its data |
| right click | a view | delete it | 
| left clcik | `Add View` button | save current view |

</details> 

## Nested Tags

> Nested tags can recategorize your Zotero items. It could replace Zotero's collection to some extent.

<details> 

You can switch between the nested tags view provided by the plugin and the tags view provided by Zotero itself with ease. 

<summary>Demonstration</summary>

For a tag to show up with the plugin it must start with a # and the subcategory must start with a forward slash (/) in the format of:

For example:

"#Catergory/subcategory"
"#Method/Longitudinal"
"#Method/cross-sectional"

The plugin also allows tags to show up in Zotero item pane.

Note: You can configure the plugin so the tag doesn't have to start with #. To do this you need to edit the "#Tag" column in the item pane and remove or change the #. 

| Nested Tags | Zotero Tags |
|--|--|
|![image](https://user-images.githubusercontent.com/51939531/221401675-fa062110-ab03-4ce8-b528-81f054edf2d1.png)| ![image](https://user-images.githubusercontent.com/51939531/221401658-058cd270-9d7c-4046-adbf-c936f6e7458a.png)|

| Operation | Target | Do |
| -- | -- | -- |
| left click | control icon | ![image](https://user-images.githubusercontent.com/51939531/221461592-72200db4-099c-474f-9364-f73c7499a294.png) |
| left click | tag item | ![image](https://user-images.githubusercontent.com/51939531/221461934-2e309e92-9ad8-4a57-9df9-cdfcf898c3cb.png) |
| right click | tag item | ![image](https://user-images.githubusercontent.com/51939531/221461489-7bfdfd39-1663-4898-8619-c0f1a304dcf7.png) |


**Delete Tag**

> The deletion has prompt, is irreversible, and should be cautious.

![image](https://user-images.githubusercontent.com/51939531/221781981-8faa86f9-2985-459c-a944-c03a1561113c.png)


</details> 

## Quick Filtering

> By clicking on the icon representing the item type, you can complete the quick filtering of item types. And repeat the process above to exit filtering. Note this filtering is valid for all collections. But it will exit automatically when you switch to the category filtered item is empty.

## Graph View

> An Obsidian's `inreractive graph` rendered by Obsidian's source code. It can show item's related items visually. And you can locate the Zotero item from the graph node (`click`), and locate the graph node from Zotero item (`ctrl+click`).

 <details>

<summary>Demonstration</summary>

![Graph View](https://user-images.githubusercontent.com/51939531/221080186-05187a08-c237-43ec-8728-9bc603f0eb4f.gif)

</details>

## PDF Styles
> Long Press to edit a PDF style.
> Click `🎨` to add a PDF Style.

<details>

<summary>Demonstration</summary>

![image](https://github.com/MuiseDestiny/zotero-style/assets/51939531/0a924c15-d867-49e0-9110-3eb54c61d453)
  
![image](https://github.com/MuiseDestiny/zotero-style/assets/51939531/26563a6a-5c94-4dea-9c1f-ca9c5a81b298)

![image](https://github.com/MuiseDestiny/zotero-style/assets/51939531/064c1250-197c-46d5-92bf-761e879c7766)

![image](https://github.com/MuiseDestiny/zotero-style/assets/51939531/2aa86c6f-9773-472a-b69f-c05df12d3bfa)


</details>



## Frequently Asked Questions

<details>

<summary>Where is my tags?</summary>

Two ways display your tags after assigning color and position: (1) you can open the column settings of title and click `Tags` and (2) you can show Tags column that is created by this addon.

</details>

## Recommended Links

### B站
- [Zotero Style 使用手册](https://www.bilibili.com/video/BV1ss4y1E7sX)
- [Zotero Style插件你值得拥有！关系图谱也有！](https://www.bilibili.com/video/BV1as4y1a7Gf)
- [zotero-style - 使用示例，以及配色征集](https://www.bilibili.com/video/BV1BA411R7hb)
- [zotero-style插件 - 标签标题对齐，为文献添加阅读高能进度条！](https://www.bilibili.com/video/BV1PK411o7JN)
- [Zotero Style - 更新一些花里胡哨的功能，以及一个有用的参考文献导入](https://www.bilibili.com/video/BV1Z44y1D7nP)

### 小红书

- [Zotero-Style插件下载及基础使用教程～～](http://xhslink.com/tlz9So)
- [Zotero新插件介绍 - Zotero Style](http://xhslink.com/PnHlCn)
- [zotero style｜一个督促你阅读文献的插件](http://xhslink.com/iUJlCn)
- [能够显示高能阅读进度条的zotero宝藏插件](http://xhslink.com/TPJlCn)
- [Zotero超好用插件｜阅读进度可视化](http://xhslink.com/QSKlCn)
- [寒假高校看论文 | Zotero论文进度可视化](http://xhslink.com/yoMlCn)
- [Zotero style简单设置教程~](http://xhslink.com/yNQBUn)
- [我学会怎么改zotero注释颜色的名字啦！！](http://xhslink.com/jfMeQo)
- [zotero style教程|让你的zotero更有趣！](http://xhslink.com/VBSeQo)
- [期刊标签配置密钥](http://xhslink.com/d5E72o)

## Acknowledgements

- This addon thanks to the users who made valuable [comments](https://github.com/MuiseDestiny/zotero-style/issues?q=label:enhancement)
- [zotero-plugin-template](https://github.com/windingwind/zotero-plugin-template)
- [zotero-plugin-toolkit](https://github.com/windingwind/zotero-plugin-toolkit)
- [chartero](https://github.com/volatile-static/Chartero)
- [zotero-tag](https://github.com/windingwind/zotero-tag)
- [zotero-pdf-translate](https://github.com/windingwind/zotero-pdf-translate)
- [ablesci](https://www.ablesci.com/)
- [easyscholar](https://easyscholar.cc/console/query)
- [endnote](https://buy.endnote.com/)
- [obsidian](https://help.obsidian.md/Obsidian/Index)
- [tag-wrangler](https://github.com/pjeby/tag-wrangler)
- [chatGPT](https://chat.openai.com/)

## Sponsor

[Here](https://github.com/MuiseDestiny/zotero-reference#%E8%B5%9E%E5%8A%A9)
