import React from 'react'

import Layout from '../components/layout'
import LibCommon from '../libs/LibCommon'
import LibPagenate from '../libs/LibPagenate'
import TopHeadBox from '../components/TopHeadBox'
import IndexRow from './IndexRow';
import PagesRow from './PagesRow';
//
function Page(props) {
//console.log(data.blogs.contents)
  var data = props.data
  var items = data.items
  var page_items = data.page_items
//console.log(items)
  return (
    <Layout>
      <TopHeadBox />
      <div className="body_main_wrap">
        <div className="container">
          <div className="btn_disp_ara_wrap mt-0">
            <div className="pages_wrap">
              <div className="row conte mt-0 mb-2">
                <div className="col-sm-12">
                  <h2 className="h4_td_title mt-2" >Pages</h2>
                  <div className="page_btn_wrap mb-0">
                  {page_items.map(function(item, i){
console.log(item )
                    return <PagesRow save_id={item.save_id} key={i} 
                    title={item.title} created_at={item.created_at} />
                  })}
                  </div>
                </div>
              </div>
            </div>            
          </div>
          <div className="body_wrap">
            <div id="post_items_box" className="row conte mt-2 mb-4">
              <div className="col-sm-12">
                <div id="div_news">
                  <h2 className="h4_td_title mt-2 mb-2" >Post</h2>
                  {items.map((item, index) => {
                    //console.log(item.id ,item.createdAt )
                    return (<IndexRow key={index}
                      show_id={item.show_id} title={item.title}
                      created_at={item.created_at}
                       />       
                    )
                  })}                  
                </div>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </Layout>
    )  
}
//
export const getStaticProps = async context => {
console.log( process.env.BASE_URL )
  var dt = LibCommon.formatDate( new Date(), "YYYY-MM-DD_hhmmss");
  var url = process.env.BASE_URL + '/cms.json?' + dt
  console.log(url )  
  const req = await fetch( url );
  const data = await req.json();
//    console.log(blogs)
  return {
    props : {
      data: data,
    }
  };
}
export default Page

