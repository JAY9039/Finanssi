import React from 'react'
import Card from './Card'
import Stocks from '../assets/Stocks.mp4'
// import video from '../assets/one.mp4'
// import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import Diversification from '../assets/Diversification.mp4'
import Crypto from '../assets/Crypto.mp4'
import Investing from '../assets/Investing.mp4'
// import PER from '../assets/PER.mp4'
import risk from '../assets/risk.mp4'
import Freedom from '../assets/Freedom.mp4'



function Knowledge() {
  return (
      <>    
    
    <div className='heading' style={{width:"fit-content", margin:"auto"}}>
    <br />

    <h1 style={{color:"#0071bd", fontSize:"30px"}}>Knowledge Section</h1>
    <br />
  

</div>
      <div style={{display:"flex", flexWrap:"wrap"}}>
      
     <Card src={Stocks} title={"Intro to Stocks"}
     learnmore={`http://youtube.com/watch?v=XBMEdwvCJ7U`}/>

     {/* <Card src={video1} title={"Investing Dicipline"} learnmore={`https://www.youtube.com/watch?v=Fen57hWEuWQ`}/> */}
     <Card src={Freedom} title={"Nifty / Sensex 101"} learnmore={`https://groww.in/p/what-is-nifty`}/>
     <Card src={video2} title={"Impact of Investing"} learnmore={`https://www.investopedia.com/articles/personal-finance/040315/why-save-retirement-your-20s.asp `}/>
     <Card src={Diversification} title={"Diversification 101"} learnmore={`http://youtube.com/watch?v=XBMEdwvCJ7U`}/>
     <Card src={Investing} title={"A stock insider"} learnmore={`https://www.investopedia.com/articles/investing/082614/how-stock-market-works.asp`}/>
     <Card src={Crypto} title={"Crypto 101"} learnmore={`https://www.coinbase.com/learn/crypto-basics `}/>
     <Card src={Investing} title={"Bonds and ETFs"} learnmore={`https://www.cnet.com/personal-finance/crypto/investing-in-crypto-5-things-everyone-should-know-today/ `}/>
     {/* <Card src={PER} title={"Finding the best Crypto"} learnmore={`https://www.investopedia.com/terms/p/price-earningsratio.asp`}/> */}
     <Card src={risk} title={"Manage Risk"} learnmore={`https://www.youtube.com/watch?v=m_LpMSlzQ-4`}/>
     <Card src={Freedom} title={"Crypto Investing"} learnmore={` https://www.forbes.com/sites/qai/2022/01/19/financial-freedom-in-2022-investing-in-stock-market-ideas/`}/>
</div>
     </>

 )
}

export default Knowledge