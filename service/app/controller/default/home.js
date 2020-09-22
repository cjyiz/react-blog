const Controller = require('egg').Controller
class HomeController extends Controller {
  async index () {

    // console.log('result浪子', this.app.config.mysql, '结束')
    let result = await this.app.mysql.get('blog_content', {})
    console.log('result浪子', result)
    this.ctx.body = result

  }
  async getArticleList () {
    let id = this.ctx.params.id
    // sql语句中的id可以是变量
    let sql = 'SELECT article.id as id,' +
      'article.title as title,' +
      'article.addTime as addTime,' +
      'article.introduce as introduce,' +
      'article.view_count as view_count ,' +
      'type.typeName as typeName ' +
      'FROM article LEFT JOIN type ON article.artype_id = type.id'
    const results = await this.app.mysql.query(sql)
    this.ctx.body = {
      data: results
    }
    return results
  }
}

module.exports = HomeController