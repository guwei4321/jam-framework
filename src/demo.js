        // const items = new jam.jSet([1, 2, 3, 4, 5]);
        // console.log(items)
        // console.log(items.keys())
        // console.log()
        // for (let item of items.values()) console.log(item);
        // console.log(items.forEach())
        var sMap = new jam.jMap([
            ['name', '张三'],
            ['title', 'Author']
        ]);
        sMap.set(1, 'aaa')
        sMap.set(1, 'bbb')
        sMap.set(['a'],222);
        console.log(sMap)
        var data = [
            { id: 1, src: 'imagesDEMO/slider-1.jpg', href: './res/img/1.jpg' },
            { id: 2, src: 'imagesDEMO/slider-2.jpg', href: './res/img/2.jpg' },
            { id: 3, src: 'imagesDEMO/slider-3.jpg', href: './res/img/3.jpg' },
            { id: 4, src: 'imagesDEMO/slider-4.jpg', href: './res/img/4.jpg' }
        ];
        new jam.cUIInputClear($('.input-text'));
        new jam.cUISwitch({
            checked: true,
            rootBox: $('.switch-wrap')
        });
        new jam.cUISwitch({
            checked: false,
            rootBox: $('.switch-wrap')
        });
        // var data = [
        //     { id: 1 },
        //     { id: 2 },
        //     { id: 3 },
        //     { id: 4 }
        // ];
        var imgSlider02 = new jam.UIImageSlider({
            images: data,
            autoPlay: true,
            loop: true,
            imageSize: {
                width: '360px',
                height: '202px'
            },
            showArrows: true,
            showNav: true,
            // datamodel: {
                // data: data,
            //     itemFn: function (item) {
            //         return '<img data-src="' + item.src + '" src="' + item.src + '">';
            //     }
            // },
            // createNav: function () {
            //     if (this.sliderNav) return;
            //     var nav = '<div class="cui-navContainer cui-slide-nav-new" style="background: #f2f2f2; color: rgb(20, 145, 197); position: absolute;  bottom: 0;">';
            //     for (var i = 0; i < this.itemNum; i++) {
            //         nav += '<span class="cui-slide-nav-item" data-index="' + i + '"></span>';
            //     }
            //     nav += '</div>';
            //     this.sliderNav = $(nav);
            //     this.sliderNav.find('span').width(this.wrapper.width() / this.itemNum - 1);
            //     this.$el.append(this.sliderNav);
            //     this.setzIndexTop(this.sliderNav);
            //     this._setNavIndex(this.datamodel.index);
            // },
            container: $('.demo02')
        });
        imgSlider02.play();

        // var mask = new jam.cUIMask({
        //     classNames: ['opacitymask']
        // });

        // mask.show();

        var alert = new jam.cUIAlert({
            showTitle: true,
            title: '头部',
            message: '内容',
            needMask: true,
            needMaskHide: true,
            disableScroll: false,
            buttons: [
                {
                    text: '确定',
                    click: function () {
                        this.hide();
                    }
                },
                {
                    type: 'cancel',
                    text: '取消',
                    click: function () {
                        this.hide();
                    }
                }
            ]
        });
        console.log(alert)
        var alert1 = new jam.cUIAlert({
            showTitle: true,
            title: '头部1',
            message: '内容1',
            needMask: true,
            needMaskHide: true,
            disableScroll: false,
            prefix: 'xxx-',
            buttons: [
                {
                    text: '确定1',
                    click: function () {
                        this.hide();
                    }
                },
                {
                    type: 'cancel',
                    text: '取1消',
                    click: function () {
                        this.hide();
                    }
                }
            ]
        });
        // alert.show()

        var loading = new jam.cUILoading({
            rootBox : $('#loading-wrap'),
            backgroundColor: 'rgba(0, 255, 153, .6)'
        })
        // loading.show();

        // var pp = new jam.cUIWarning({
        //     warningtitle: 'hi'
        // });
        // pp.show();

        // var warHead = new jam.cUIWarning({
        //     warningtitle : '123',
        //     needMask: true
        // })
        // warHead.show();
        // var scroolList = new jam.cUIScrollRadio();
        // scroolList.show();
        var toast = new jam.cUIToast({
            title: '带蒙版，点击蒙版不关闭，3秒关闭',
            disableScroll: true,
            sleep: 3,
            needMaskHide: false,
            // prefix: 'xxxx-',
            delayCallback: function(){
                console.log('关闭')
            }
        });
        $('#button0').on('click', function(){
            loading.show(function () {
            });
            // toast.hide(function (){
            //     console.log(12312)
            // })
        })
        $('#button1').on('click', function () {
            toast.show();
        })
        $('#button2').on('click', function () {
            alert.show();
        })

        toast.hide(function () {
            console.log(11312)
        });
// })