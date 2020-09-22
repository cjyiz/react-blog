'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index () {
    const { ctx } = this;
    console.log('zheshi', this.app)
    // let res = await this.app.mysql.get('blog_content')
    // console.log('result浪子', res)
    ctx.body = 'hi, egg';
  }
  async list () {
    const { ctx } = this
    ctx.body = '<h1>这是浪子的第一个后台</h1>'
  }
}

module.exports = HomeController;
