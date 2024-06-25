/* eslint-disable react/prop-types */
export default function Blogpage(){
    return(
        <div className="w-screen flex flex-col items-center justify-center"> 
            <div className="h-12 border w-screen  border-b-2 flex items-center justify-center">Tashwin SJ <span className="ml-[600px]">About</span></div>
            <Blogcard  date="12 March 2022" title="Deep Neural Nets: 33 years ago and 33 years from now" desc = "To my knowledge, LeCun et al. 1989 is the earliest real-world application of a neural net trained end-to-end with backpropagation. Can we improve on it using 33 years of progress in deep learning? What does 1989 deep learning look like to someone in 2022, and what will today's deep learning look like to someone in 2055? "/> 
            <Blogcard date="Jun 21, 2021" title="A from-scratch tour of Bitcoin in Python" desc="We are going to create, digitally sign, and broadcast a Bitcoin transaction in pure Python, from scratch, and with zero dependencies "/> 
            <Blogcard date ="Nov 12 2015" title= "Short Story on AI: A Cognitive Discontinuity." desc ="We will look at Convolutional Neural Networks, with a fun example of training them to classify #selfies as good/bad based on a scraped dataset of 2 million selfies."/>
            <Blogcard  date="12 March 2022" title="Deep Neural Nets: 33 years ago and 33 years from now" desc = "To my knowledge, LeCun et al. 1989 is the earliest real-world application of a neural net trained end-to-end with backpropagation. Can we improve on it using 33 years of progress in deep learning? What does 1989 deep learning look like to someone in 2022, and what will today's deep learning look like to someone in 2055? "/> 
            <Blogcard date="Jun 21, 2021" title="A from-scratch tour of Bitcoin in Python" desc="We are going to create, digitally sign, and broadcast a Bitcoin transaction in pure Python, from scratch, and with zero dependencies "/> 
            <Blogcard date ="Nov 12 2015" title= "Short Story on AI: A Cognitive Discontinuity." desc ="We will look at Convolutional Neural Networks, with a fun example of training them to classify #selfies as good/bad based on a scraped dataset of 2 million selfies."/>
        </div>
    )
}
function Blogcard(props) { 
    return(
        <div className="w-[720px] mt-8">
            <div className="font-bold text-gray-400">{props.date}</div>
            <div className="text-blue-600 font-semibold text-[20px]"> {props.title} </div> 
            <div className="mt-2 text-[16px]">{props.desc}</div>
        </div>
    )
}