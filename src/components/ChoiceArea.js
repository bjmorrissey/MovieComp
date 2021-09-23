import React, { useState, useEffect } from "react";
import MovieSelection from "./MovieSelection";


const ChoiceArea = () => {

  const [movieOne, setMovieOne] = useState('')
  const [movieTwo, setMovieTwo] = useState('')
  const [movieOneAdjEarnings, setMovieOneAdjEarnings] = useState('')
  const [movieTwoAdjEarnings, setMovieTwoAdjEarnings] = useState('')
  const [movieOneInfo, setMovieOneInfo] = useState({
    title: '',
    year: '',
    earnings: '',
    poster: ''
  })
  const [movieTwoInfo, setMovieTwoInfo] = useState({
    title: '',
    year: '',
    earnings: '',
    poster: ''
  })
  
  useEffect(() => {
    convertEarnings(movieOneInfo)
    convertEarnings2(movieTwoInfo)

  }, [movieOneInfo, movieTwoInfo])

 
    
  async function mainOne(e) {
    e.preventDefault();

    try {
      const movieFetch = await pullMovie();
      pullMovie();
    } catch(err){
      console.log(err)
    }
  }

  const pullMovie = async () => {
    let apiKey = process.env.REACT_APP_API_KEY;
    apiKey = apiKey.replaceAll("'", "").replace(';', '');

    let title1 = movieOne.replaceAll(' ', '+')
    let title2 = movieTwo.replaceAll(' ', '+')
    let urlOne = `https://www.omdbapi.com/?t=${title1}&apikey=${apiKey}`
    let urlTwo = `https://www.omdbapi.com/?t=${title2}&apikey=${apiKey}`

    const response = await fetch(urlOne);
    const data = await response.json();
    console.log(data)
    setMovieOneInfo({
      title: data.Title,
      year: data.Year,
      poster: data.Poster,
      earnings: data.BoxOffice
    })
    const response2 = await fetch(urlTwo);
    
    const data2 = await response2.json();
    console.log(data2)
    setMovieTwoInfo({
      title: data2.Title,
      year: data2.Year,
      poster: data2.Poster,
      earnings: data2.BoxOffice
    })

  }    
     
    

  const convertEarnings = async (movie) => {
    let startingAmount;
    if (!movie.earnings) {
      startingAmount = `0.00`
    } else {
      startingAmount = Number(movie.earnings.replace('$', '').replaceAll(',', ''));

    }
      
      let startingYear = Number(movie.year);
      let url= `https://cors-anywhere.herokuapp.com/https://inflation-api.herokuapp.com/api/?value=${startingAmount}&year=${startingYear}`
      
      // console.log(url)
      let response  = await fetch(url);
      let data = await response.json();
      // console.log(data)

      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })
      
      const formatAdjEarnings = formatter.format(data.response.adjustedValue)

      setMovieOneAdjEarnings(formatAdjEarnings)

      return movieOneAdjEarnings;
      
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })
  const convertEarnings2 = async (movie) => {
    let startingAmount;
    if (!movie.earnings) {
      startingAmount = `0.00`
    } else {
      startingAmount = Number(movie.earnings.replace('$', '').replaceAll(',', ''));

    }
      
      let startingYear = Number(movie.year);
      let url= `https://cors-anywhere.herokuapp.com/https://inflation-api.herokuapp.com/api/?value=${startingAmount}&year=${startingYear}`
      
      // console.log(url)
      let response  = await fetch(url);
      let data = await response.json();
      // console.log(data)

     
      
      const formatAdjEarnings = formatter.format(data.response.adjustedValue)

      setMovieTwoAdjEarnings(formatAdjEarnings)

      return movieTwoAdjEarnings;
      
  }
 
  const winner = (one, two) => {
    
    let oneInt = Number(Math.floor(one.replace("$", "").replaceAll(",", "")))
    let twoInt = Number(Math.floor(two.replace("$", "").replaceAll(",", "")))
    let suff = ''
    let short = ''

    if (!oneInt || !twoInt)  {
      if (movieOneInfo.earnings === undefined || movieTwoInfo.earnings === undefined){

        return `There's an issue with an amount not being reported. Try another movie!`;
      }
    } else {

     if (oneInt > twoInt) {
      let diff = oneInt - twoInt;
      
      if (diff.toString().length > 6) {
        suff=" million"
        short = diff.toString().slice(0, diff.toString().length-6)
        
        console.log(short)
        console.log(suff)
      } else if (diff.toString().length > 3){
        suff = ',000'
        short = diff.toString().slice(0, diff.toString().length-3)
        console.log(suff)
      } else {
        suff = '';
      }

      const bold = {
        fontWeight: 'bold'
      }

      function boldTitle() {
        return <div style={bold}>{movieOneInfo.title}</div>
      }
      
     
      
      return `After inflation, ${movieOneInfo.title} brought in $${short}${suff} more income. `

    } else {

      let diff = twoInt - oneInt;
      
      if (diff.toString().length > 6) {
        suff=" million"
        short = diff.toString().slice(0, diff.toString().length-6)
        
      } else if (diff.toString().length > 3){
        suff = ',000'
        short = diff.toString().slice(0, diff.toString().length-3)
      } else {
        short = diff;
        suff = '';
      }
      return `After inflation, ${movieTwoInfo.title} brought in $${short}${suff} more income. `
    }
  
  }
}

console.log(movieOneInfo.earnings, movieTwoInfo.earnings)

  return (
  <div className="choicearea">
    <div className="desc">Welcome! This is a simple app - pick two movies and see how stand up to eachother to box office earnings after inflation is considered. This app is brought to you by the OMDB API & the inflation-app API. </div>
    <div div className="title">Choose two movies below</div>
    <div className="moviebout">
      <div className="movie">
      <form onSubmit={mainOne}>
      <input type='text' placeholder="Enter movie title" value={movieOne} onChange={(e) => setMovieOne(e.target.value)}></input>
      </form>
      
      <MovieSelection title={movieOneInfo.title} year={movieOneInfo.year} earnings={movieOneInfo.earnings} poster={movieOneInfo.poster} adjEarnings={movieOneAdjEarnings} />
      </div>


   
      <div className="movie">
      <form onSubmit={mainOne}>
      <input type='text' placeholder="Enter movie title" value={movieTwo} onChange={(e) => setMovieTwo(e.target.value)}></input>
      </form>
      
      {/* {moviePrintout()} */}
      <MovieSelection title={movieTwoInfo.title} year={movieTwoInfo.year} earnings={movieTwoInfo.earnings} poster={movieTwoInfo.poster} adjEarnings={movieTwoAdjEarnings} /> 
      </div>
 

    </div>
    <div className="winner">
    
      {winner(movieOneAdjEarnings, movieTwoAdjEarnings)}
    </div>
  </div>
  )

  }



export default ChoiceArea;