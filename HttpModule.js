/**
 * HttpModule
 * 
 * @export
 * @class HttpModule
 */
module.exports = class HttpModule{
	constructor(options){
		this.name = options.name;

		this.router = options.router;

		this.auth = options.auth;
	}
}