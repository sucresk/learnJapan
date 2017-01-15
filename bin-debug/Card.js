var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Card = (function (_super) {
    __extends(Card, _super);
    function Card() {
        var _this = _super.call(this) || this;
        _this.skinName = "CardSkin";
        return _this;
    }
    Card.prototype.createChildren = function () {
        this.btnPlay.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayTouch, this);
        this.btnNext.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNext, this);
    };
    Object.defineProperty(Card.prototype, "vo", {
        set: function (value) {
            this._vo = value;
            this.txtName.text = this._vo.word + " " + this._vo.key;
            this.txtTip.text = "";
        },
        enumerable: true,
        configurable: true
    });
    Card.prototype.onNext = function (e) {
        this.dispatchEvent(new egret.Event("next", false, false));
    };
    Card.prototype.onPlayTouch = function (e) {
        if (this._vo == null) {
            return;
        }
        var that = this;
        var mp = this._vo.audio == "" ? this._vo.word + "_mp3" : this._vo.audio + "_mp3";
        RES.getResAsync(mp, function (data, key) {
            var sound = data;
            if (sound) {
                sound.play(0, 1);
            }
            else {
                that.txtTip.text = this._vo.word + " no audio!";
                console.log(this._vo.word + " no audio!");
            }
        }, this);
    };
    return Card;
}(eui.Component));
__reflect(Card.prototype, "Card");
//# sourceMappingURL=Card.js.map