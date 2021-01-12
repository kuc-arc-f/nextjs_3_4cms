import React from 'react'

import Layout from '../components/layout'
import LibCommon from '../libs/LibCommon'
import IndexRow from './IndexRow';
import TopHeadBox from '../components/TopHeadBox'
//
//
export default class Page extends React.Component {
  constructor(props){
    super(props)
    this.state = {items: '', items_org: ''}
//console.log(this.props.data )
  }
  async componentDidMount(){
    var dt = LibCommon.formatDate( new Date(), "YYYY-MM-DD_hhmmss");
    var url = '/cms.json?' + dt
console.log(url )
    const req = await fetch( url );
    const data = await req.json(); 
    var items =  LibCommon.get_reverse_items(data.items)
// console.log(items )
    this.setState({ items: items })   
  } 
  tabRow(){
    const items = this.state.items
    if(items instanceof Array){
// console.log(items )
      return items.map((item, index) => {
        return (<IndexRow key={index}
          id={item.id} show_id={item.show_id} title={item.title}
          created_at={item.created_at} />        
        )
      })      
    }
  } 
  render() {
    return (
    <Layout>
      <TopHeadBox />
      <div className="body_main_wrap">
        <div className="container">
          <div className="body_wrap">
            <div id="post_items_box" className="row conte mt-4 mb-4">
              <div className="col-sm-12">
                <div id="div_news">
                  <h2 className="h4_td_title mt-2 mb-2" >Post</h2>
                </div>
              </div>
              {this.tabRow()}
            </div>
          </div>
        </div>
      </div>
    </Layout>
    )
  }
}
