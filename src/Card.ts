class Card extends eui.Component
{
	public txtName:eui.Label;
	public txtTip:eui.Label;
	public btnPlay:eui.Button;
	public btnNext:eui.Button;

	private  _vo:CardVO;

	public constructor() {
		super();
		this.skinName = "CardSkin";
	}

	protected createChildren():void
	{
		this.btnPlay.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayTouch, this);
		this.btnNext.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNext, this);
	}

	public set vo(value:CardVO)
	{
		this._vo = value;
		this.txtName.text = this._vo.word + " " + this._vo.key;
		this.txtTip.text = "";
	}
	private onNext(e:egret.TouchEvent):void
	{
		this.dispatchEvent(new egret.Event("next",false,false));
	}
	private onPlayTouch(e:egret.TouchEvent):void
	{
		if(this._vo == null)
		{
			return;
		}
		var that = this;
		var mp:string = this._vo.audio==""? this._vo.word + "_mp3" : this._vo.audio + "_mp3";
		RES.getResAsync(mp,function(data, key){
			var sound:egret.Sound = data;
  			if(sound)
			{
				sound.play(0,1);
			}
			else
			{
				that.txtTip.text = this._vo.word + " no audio!";
				console.log(this._vo.word + " no audio!");
			}
		},this)
	}
	
}