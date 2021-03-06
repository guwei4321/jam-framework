﻿/**
 * @class validators
 * @description 常用的验证方法
 */
define([], function () {

    var result = {};
    _toString = Object.prototype.toString;
    $.each("String Function Boolean RegExp Number Date Object Null Undefined".split(" "), function (i, name) {
        var fn;

        switch (name) {
            case 'Null':
                fn = function (obj) { return obj === null; };
                break;
            case 'Undefined':
                fn = function (obj) { return obj === undefined; };
                break;
            default:

                //        if (typeof obj === 'object') {
                //          obj = Object.prototype.toString.call(obj);
                //        }
                fn = function (obj) { return new RegExp(name + ']', 'i').test(_toString.call(obj)); };
                //fn = function (obj) { return new RegExp(name + ']', 'i').test(obj); };
                break;
        }
        result['is' + name] = fn;

    });

    var validators = {
        isEmail: function (text) {
            var reg = /^(?:\w+\.?)*\w+@(?:\w+\.?)*\w+$/;
            return reg.test(text);
        },

        isPassword: function (text) {
            var reg = /^[a-zA-Z0-9]{6,20}$/;
            return reg.test(text);
        },

        isMobile: function (text) {
            var reg = /^(1[3-8][0-9])\d{8}$/;
            return reg.test(text);
        },

        isChinese: function (text) {
            var reg = /^[\u4e00-\u9fff]{0,}$/;
            return reg.test(text);
        },

        isEnglish: function (text) {
            var reg = /^[A-Za-z]+$/;
            return reg.test(text);
        },

        isZip: function (text) {
            var reg = /^\d{6}$/;
            return reg.test(text);
        },

        isDate: function (text) {
            //yyyyMMdd格式正则加入润年2月
            var reg = /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})(((0[13578]|1[02])(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)(0[1-9]|[12][0-9]|30))|(02(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))0229)$/;
            if (!reg.test(text)) {
                return false;
            }
            return true;
        },

        isNum: function (text) {
            var reg = /^\d+$/;
            return reg.test(text);
        },

        isCellPhone: function (text) {
            var re = /(^0{0,1}1[3|4|5|6|7|8][0-9]{9}$)/;
            return re.test(text);
        },

        isIDCardNo: function (text) {
            var reg = /^[A-Za-z0-9]+$/;
            return reg.test(text);
        },

        isEnglishAndSpace: function (text) {
            var reg = /^([a-zA-Z ]+|[\u4e00-\u9fa5]+)$/;
            return reg.test(text);
        },

        isTraditional: function (text) { //判断是否包含繁体字
            var sTraditional = '萬與醜專業叢東絲兩嚴喪個爿豐臨為麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅從侖倉儀們價眾優夥會傴傘偉傳傷倀倫傖偽佇體餘傭僉俠侶僥偵側僑儈儕儂俁儔儼倆儷儉債傾傯僂僨償儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農塚馮衝決況凍淨淒涼淩減湊凜幾鳳鳧憑凱擊氹鑿芻劃劉則剛創刪別剗剄劊劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳勩勻匭匱區醫華協單賣盧鹵臥衛卻巹廠廳曆厲壓厭厙廁廂厴廈廚廄廝縣參靉靆雙發變敘疊葉號歎嘰籲後嚇呂嗎唚噸聽啟吳嘸囈嘔嚦唄員咼嗆嗚詠哢嚨嚀噝吒噅鹹呱響啞噠嘵嗶噦嘩噲嚌噥喲嘜嗊嘮啢嗩唕喚嘖嗇囀齧囉嘽嘯噴嘍嚳囁嗬噯噓嚶囑嚕劈囂謔團園囪圍圇國圖圓聖壙場壞塊堅壇壢壩塢墳墜壟壟壚壘墾堊墊埡墶壋塏堖塒塤堝墊垵塹墮壪牆壯聲殼壺壼處備複夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗媯姍薑婁婭嬈嬌孌娛媧嫻嫿嬰嬋嬸媼嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵堯尷屍盡層屭屜屆屬屢屨嶼歲豈嶇崗峴嶴嵐島嶺嶽崠巋嶨嶧峽嶢嶠崢巒嶗崍嶮嶄嶸嶔崳嶁脊巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪襆幹並廣莊慶廬廡庫應廟龐廢廎廩開異棄張彌弳彎彈強歸當錄彠彥徹徑徠禦憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀懇惡慟懨愷惻惱惲悅愨懸慳憫驚懼慘懲憊愜慚憚慣湣慍憤憒願懾憖懣懶懍戇戔戲戧戰戩戶紮撲扡執擴捫掃揚擾撫摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏撈損撿換搗據撚擄摑擲撣摻摜摣攬撳攙擱摟攪攜攝攄擺搖擯攤攖撐攆擷擼攛擻攢敵斂數齋斕鬥斬斷無舊時曠暘曇晝曨顯晉曬曉曄暈暉暫曖劄術樸機殺雜權條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒棬椏橈楨檔榿橋樺檜槳樁夢檮棶檢欞槨櫝槧欏橢樓欖櫬櫚櫸檟檻檳櫧橫檣櫻櫫櫥櫓櫞簷檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳彙漢汙湯洶遝溝沒灃漚瀝淪滄渢溈滬濔濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗湧濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣濕潰濺漵漊潷滾滯灩灄滿瀅濾濫灤濱灘澦濫瀠瀟瀲濰潛瀦瀾瀨瀕灝滅燈靈災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾煆溜愛爺牘犛牽犧犢強狀獷獁猶狽麅獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽瑉玨琺瓏璫琿璡璉瑣瓊瑤璦璿瓔瓚甕甌電畫暢疇癤療瘧癘瘍鬁瘡瘋皰屙癰痙癢瘂癆瘓癇癡癉瘮瘞瘺癟癱癮癭癩癬癲臒皚皺皸盞鹽監蓋盜盤瞘眥矓睜睞瞼瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜碩硤磽磑礄確鹼礙磧磣堿镟滾禮禕禰禎禱禍稟祿禪離禿稈種積稱穢穠穭稅穌穩穡窮竊竅窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩簹箏籌簽簡籙簀篋籜籮簞簫簣簍籃籬籪籟糴類秈糶糲粵糞糧糝餱緊縶糸糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺絏紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏絛繼綈績緒綾緓續綺緋綽緔緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒韁繾繰繯繳纘罌網羅罰罷羆羈羥羨翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚膁腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕齶膩靦膃騰臏臢輿艤艦艙艫艱豔艸藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇檾蘋莖蘢蔦塋煢繭荊薦薘莢蕘蓽蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞蓧萊蓮蒔萵薟獲蕕瑩鶯蓴蘀蘿螢營縈蕭薩蔥蕆蕢蔣蔞藍薊蘺蕷鎣驀薔蘞藺藹蘄蘊藪槁蘚虜慮虛蟲虯蟣雖蝦蠆蝕蟻螞蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖嫋褘襪襲襏裝襠褌褳襝褲襇褸襤繈襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶讋譽謄訁計訂訃認譏訐訌討讓訕訖訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗諡謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖穀豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭齎贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贗讚贇贈贍贏贛赬趙趕趨趲躉躍蹌蹠躒踐躂蹺蹕躚躋踴躊蹤躓躑躡蹣躕躥躪躦軀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰鬱郟鄶鄭鄆酈鄖鄲醞醱醬釅釃釀釋裏钜鑒鑾鏨釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鈍鈔鍾鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷缽鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸鉶銬銠鉺銪鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐧銳銻鋃鋟鋦錒錆鍺錯錨錡錁錕錩錫錮鑼錘錐錦鍁錈錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鏌鎮鎛鎘鑷鐫鎳鎿鎦鎬鎊鎰鎔鏢鏜鏍鏰鏞鏡鏑鏃鏇鏐鐔钁鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑲長門閂閃閆閈閉問闖閏闈閑閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隉隕險隨隱隸雋難雛讎靂霧霽黴靄靚靜靨韃鞽韉韝韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥纇顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飆飛饗饜飣饑飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢魘魎魚魛魢魷魨魯魴魺鮁鮃鯰鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鯰鯛鯨鯵鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鱷鰍鰒鰉鰁鱂鯿鰠鼇鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅鰼鱖鱔鱗鱒鱯鱤鱧鱣鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鴬鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鶤鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶿鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺鸇鷹鸌鸏鸛鸘鹺麥麩黃黌黶黷黲黽黿鼂鼉鞀鼴齇齊齏齒齔齕齗齟齡齙齠齜齦齬齪齲齷龍龔龕龜誌製谘隻裡係範鬆冇嚐嘗鬨麵準鐘彆閒儘臟拚';
            for (var i = 0; i < text.length; i++) {
                var tmp = text.charAt(i);
                if (sTraditional.indexOf(tmp) > -1) {
                    return true;
                }
            }
            return false;
        },
        /*判断身份证有效性**
        * clone from pc tuna
        * @by ffpan 2014/04/17
        ***/
        isIdCard: function (idCard) {
            var num = idCard.toLowerCase().match(/\w/g);
            if (idCard.match(/^\d{17}[\dx]$/i)) {
                var sum = 0, times = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                for (var i = 0; i < 17; i++)
                    sum += parseInt(num[i], 10) * times[i];
                if ("10x98765432".charAt(sum % 11) != num[17]) {
                    return false;
                }
                return !!idCard.replace(/^\d{6}(\d{4})(\d{2})(\d{2}).+$/, "$1-$2-$3");
            }
            if (idCard.match(/^\d{15}$/)) {
                return !!idCard.replace(/^\d{6}(\d{2})(\d{2})(\d{2}).+$/, "19$1-$2-$3");
            }
            return false;
        },
        isIdCard_bak: function (idcard) {
            var Errors = new Array(true, false, false, false, false); //请输入正确的身份证号码2012-9-19
            var area = {
                11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古",
                21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏",
                33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东",
                41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西",
                46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南",
                54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏",
                65: "xinjiang", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外"
            };
            var Y, JYM;
            var S, M;
            var idcard_array = [];
            idcard_array = idcard.split("");
            if (area[parseInt(idcard.substr(0, 2))] === null) return Errors[4];
            switch (idcard.length) {
                case 18:
                    if (parseInt(idcard.substr(6, 4)) % 4 === 0 || (parseInt(idcard.substr(6, 4)) % 100 === 0 && parseInt(idcard.substr(6, 4)) % 4 === 0)) {
                        ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/; //闰年出生日期的合法性正则表达式
                    } else {
                        ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/; //平年出生日期的合法性正则表达式
                    }
                    if (ereg.test(idcard)) {
                        S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7 + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9 + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10 + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5 + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8 + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4 + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2 + parseInt(idcard_array[7]) * 1 + parseInt(idcard_array[8]) * 6 + parseInt(idcard_array[9]) * 3;
                        Y = S % 11;
                        M = "F";
                        JYM = "10X98765432";
                        M = JYM.substr(Y, 1);
                        if (M.toUpperCase() == idcard_array[17].toUpperCase())
                            return Errors[0];
                        else
                            return Errors[3];
                    } else
                        return Errors[2];
                    break;
                default:
                    return Errors[1];
            }
        },

        //验证码（免登录查询）
        isRightVerifycode: function (text) {
            var reg = /^[a-z0-9]{4,30}$/;
            return reg.test(text);
        },

        isAllowSetTradingPass: function (text) {
            var case1 = true; //数字相同验证
            var case2 = true; //连续数字验证
            var case3 = true; //2段连续数字
            var case4 = true; //回文数
            for (var i = 0; i < text.length - 1; i++) {
                var num1 = parseInt(text[i]);
                var num2 = parseInt(text[i + 1]);
                case1 = case1 && (num1 == num2);
                case2 = case2 && (num2 == num1 + 1);

                var num3 = i < text.length + 1 ? parseInt(text[i + 3]) : -1;
                var num4 = parseInt(text[5 - i]);
                if (i < text.length / 2 - 1) {
                    case3 = case3 && (num1 == num3 && num2 == num1 + 1);
                    case4 = case4 && (num1 == num4 && num2 == num1 + 1);
                } else if (i == text.length / 2 - 1) {
                    case3 = case3 && (num1 == num3);
                    case4 = case4 && (num1 == num4);
                }

                if (i + 2 == text.length && text.length == 6 && (case1 || case2 || case3 || case4)) {
                    return false;
                }
            }
            return true;
        },

        isQq: function (target) {
            return /^[1-9]\d{4,}$/.test(target);
        },

        isPhone: function (target) {
            return /^[0-9]{3,4}-[0-9]{7,8}$/.test(target);
        },

        isUrl: function (target) {
            //modified by byl   添加对host中有-的支持（//建议判断完整url可以改成只处理 开头部分 是否为HTTP 或者https）
            if (!target) return false;
            target = target.replace(/#.*$/, '');
            target = target.replace(/\?.*$/, '');
            return /^\w+:\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(target);
        },

        //isPostcode: this.isZip,

        isIP: function (obj) { //是否为IP
            if (!obj || result.isNull(obj)) return false;

            var re = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g //匹配IP地址的正则表达式
            if (re.test(obj)) {
                if (RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256) return true;
            }

            return false;
        },

        isEmptyObject: function (obj) {
            for (var name in obj) {
                return false;
            }

            return true;
        },

        isCharsLenWithinRange: function (value, max) {
            if (!result.isString(value)) return false;

            var reg = value.match(/\W/g);
            var length = reg == null ? value.length : value.length + reg.length;
            var isValidate = length >= 0 && length <= max;

            if (!isValidate) {
                return false;
            } else {
                this.cutLen = value.length;
            }

            return true;
        },

        /**
         *  @description 联系人输入控制, 0-13个汉字，0-26个字符
         */
        isContactName: function (value) {
            if (!result.isString(value)) return false;
            return this.isCharsLenWithinRange.call(this, value, 26);
        },

        /**
         * 备注输入控制
         * 0-50个汉字，0-100个字符
         */
        isBookPS: function (value) {
            if (!result.isString(value)) return false;
            return this.isCharsLenWithinRange.call(this, value, 100);
        },

        /**
         * 备注输入控制
         * 0-50个汉字，0-100个字符
         */
        isInvTitle: function (value) {
            if (!result.isString(value)) return false;
            return this.isCharsLenWithinRange.call(this, value, 100);
        },

        /**
         *
         */
        isBoardTitle: function (value) {
            if (!result.isString(value)) return false;
            return this.isCharsLenWithinRange.call(this, value, 40);
        },

        /* 送达地输入控制
         *  0-40个汉字，80个字符
         */
        isAreaTitle: function (value) {
            if (!result.isString(value)) return false;
            return this.isCharsLenWithinRange.call(this, value, 80);
        },

        /**
         * 11位规则
         * 不判非1规则。
         */
        isMobileNumber: function (number) {
            if (!result.isString(number)) return false;
            var LEN = 11;
            return number.length == LEN && /^(\d| )+$/g.test(number);
        },

        /**
         * 少于3位或多于7位、输入含特殊字符、输入汉字等不符合航班号查询规则
         */
        isFlightNumber: function (flightNumber) {
            if (!result.isString(flightNumber)) return false;

            var minLen = 3,
                maxLen = 7;

            return flightNumber.length >= minLen && flightNumber.length <= maxLen && /^(\d|\w)+$/g.test(flightNumber);
        }

    };

    validators.isPostcode = validators.isZip;
    return validators;
});