import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super()
        console.log('hello i am a constructor fron news component..')
        this.state={
            articles:[],
            loading:false
        }
    }


   async componentDidMount(){
        console.log('cdm')
        let url='https://newsapi.org/v2/top-headlines?country=in&apiKey=124ba18132d0415e97bf66c90f35b35a'
        let data = await fetch(url)
        let parseData= await data.json()
        console.log(parseData)
        this.setState({articles: parseData.articles})
    }


    render() {
        return (
            <div className='container my-3'>
                <h2>Live News Top-Headlines</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                                <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                           </div>
                })}
                </div>
            </div>
        )
    }
}

export default News
