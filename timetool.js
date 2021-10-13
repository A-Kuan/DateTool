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
	getFullDate(format){
		return this.formatFullDate(format);
	}
	// 格式化今日日期
	formatFullDate(format){
		const symbol_y_between_m = format.charAt(4);
		const symbol_m_between_d = format.charAt(7);
		const symbol_d_between_H = format.charAt(10);
		const symbol_H_between_M = format.charAt(13);
		const symbol_M_between_S = format.charAt(16);

		// 1.匹配 yyyy/mm/dd
		const reg_y_m_d = /^(y{4})[(\/)|(\-)|(\:)|\s](m{2})[(\/)|(\-)|(\:)|\s](d{2})$/;
		const regex = new RegExp(reg_y_m_d);
		if(regex.test(format)){
			return {
				'code': 1,
				'date': `${this.getYear()}${symbol_y_between_m}${this.getMonth()}${symbol_m_between_d}${this.getDay()}`
			}
		}
		// 2.匹配 yyyy/mm/dd HH
		const reg_y_m_d_H = /^(y{4})[(\/)|(\-)|(\:)|\s](m{2})[(\/)|(\-)|(\:)|\s](d{2})[(\/)|(\-)|(\:)|\s](H{2})$/;
		const regex_H = new RegExp(reg_y_m_d_H);
		if(regex_H.test(format)){
			return {
				'code': 2,
				'date': `${this.getYear()}${symbol_y_between_m}${this.getMonth()}${symbol_m_between_d}${this.getDay()}${symbol_d_between_H}${this.getHours()}`
			}
		}
		// 3.匹配 yyyy/mm/dd HH：MM
		const reg_y_m_d_H_M = /^(y{4})[(\/)|(\-)|(\:)|\s](m{2})[(\/)|(\-)|(\:)|\s](d{2})[(\/)|(\-)|(\:)|\s](H{2})[(\/)|(\-)|(\:)|\s](M{2})$/;
		const regex_H_M = new RegExp(reg_y_m_d_H_M);
		if(regex_H_M.test(format)){
			return {
				'code': 3,
				'date': `${this.getYear()}${symbol_y_between_m}${this.getMonth()}${symbol_m_between_d}${this.getDay()}${symbol_d_between_H}${this.getHours()}${symbol_H_between_M}${this.getMinutes()}`
			}
		}
		// 4.匹配 yyyy/mm/dd HH：MM:SS
		const reg_y_m_d_H_M_S = /^(y{4})[(\/)|(\-)|(\:)|\s](m{2})[(\/)|(\-)|(\:)|\s](d{2})[(\/)|(\-)|(\:)|\s](H{2})[(\/)|(\-)|(\:)|\s](M{2})[(\/)|(\-)|(\:)|\s](S{2})$/;
		const regex_H_M_S = new RegExp(reg_y_m_d_H_M_S);
		if(regex_H_M_S.test(format)){
			return {
				'code': 4,
				'date': `${this.getYear()}${symbol_y_between_m}${this.getMonth()}${symbol_m_between_d}${this.getDay()}${symbol_d_between_H}${this.getHours()}${symbol_H_between_M}${this.getMinutes()}${symbol_M_between_S}${this.getSeconds()}`
			}
		}
		// 匹配出错时默认返回
		return {
			'code': 0,
			'date': `${this.getYear()}/${this.getMonth()}/${this.getDay()} ${this.getHours()}:${this.getMinutes()}:${this.getSeconds()}`
		}
	}

}