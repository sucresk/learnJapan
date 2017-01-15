class CardManager 
{
	private _cards:CardVO[] = [];
	private _curIndex:number = -1;

	public constructor(config:any) 
	{
		if(config && config.cards)
		{
			let i:number;
			let len:number;
			for(i = 0, len = config.cards.length; i < len; i++)
			{
				var c:CardVO = new CardVO();
				c.word = config.cards[i].word;
				c.key  = config.cards[i].key;
				c.audio = config.cards[i].audio;
				this._cards.push(c);
			}
		}
	}

	public random():void
	{
		this._cards.sort((a:CardVO, b:CardVO)=>{
			if(Math.random() > 0.5)
			{
				return 1;
			}
			return -1;
		})
	}

	public next():CardVO
	{
		this._curIndex++;
		if(this._curIndex >= this._cards.length || this._curIndex < 0)
		{
			this._curIndex = 0;
		}
		return this._cards[this._curIndex];
	}
}