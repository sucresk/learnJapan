var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CardManager = (function () {
    function CardManager(config) {
        this._cards = [];
        this._curIndex = -1;
        if (config && config.cards) {
            var i = void 0;
            var len = void 0;
            for (i = 0, len = config.cards.length; i < len; i++) {
                var c = new CardVO();
                c.word = config.cards[i].word;
                c.key = config.cards[i].key;
                c.audio = config.cards[i].audio;
                this._cards.push(c);
            }
        }
    }
    CardManager.prototype.random = function () {
        this._cards.sort(function (a, b) {
            if (Math.random() > 0.5) {
                return 1;
            }
            return -1;
        });
    };
    CardManager.prototype.next = function () {
        this._curIndex++;
        if (this._curIndex >= this._cards.length || this._curIndex < 0) {
            this._curIndex = 0;
        }
        return this._cards[this._curIndex];
    };
    return CardManager;
}());
__reflect(CardManager.prototype, "CardManager");
//# sourceMappingURL=CardManager.js.map