class DateTool {
	
	constructor(){
		this.date = new Date();
	}

	test(){
		return this.date.toLocaleString()
	}
	
	// 获取年份
	getYear(){
		return this.date.getFullYear()
	}
	// 获取月份
	getMonth(){
		let month = this.date.getMonth()+1
		return month > 9 ? month : `0${month}` 
	}
	//获取日
	getDay(){
		let day = this.date.getDate()
		return day > 9 ? day : `0${day}` 
	}
	// 获取小时 24制
	getHours(){
		let hours = this.date.getHours()
		return hours > 9 ? hours : `0${hours}` 
	}
	// 获取分钟
	getMinutes(){
		let minutes = this.date.getMinutes()
		return minutes > 9 ? minutes : `0${minutes}` 
	}
	//  获取秒
	getSeconds(){
		let seconds = this.date.getSeconds()
		return seconds > 9 ? seconds : `0${seconds}` 
	}

	// 获取完整时间
	getFullDate(){
		return `${this.getYear()}${this.getMonth()}${this.getDay()}${this.getHours()}${this.getMinutes()}${this.getSeconds()}`
	}
	formatFullDate(){

	}

}

