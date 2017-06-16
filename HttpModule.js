/**
 * HttpModule
 * 
 * @export
 * @class HttpModule
 */
module.exports = class HttpModule{
	constructor(options){
		this.name = options.name;

		this.endpoint = options.endpoint;
		
		this.router = require(process.cwd() + `/modules/${this.name}/router`);

		this.auth = options.auth;
	}
}