import './App.css'
import twitter from "./assets/twitter.png"
import github from "./assets/github.png" 
import blog from "./assets/blog.png"
import link from "./assets/linkedin.png"
import Timeline from './components/Timeline'
import Footer from './components/Footer'
import BlogArticle from './components/BlogArticle' 
import cuda from "./assets/cuda.png"
import gpt from './assets/gpt.png' 
import tash from "./assets/tash.png"
function App() {


  return (
    < div className='flex items-center no-scrollbar overflow-y-auto  justify-center flex-col'>
      <div className='bg-black h-1'></div>
      <div className='header h-16 flex items-center justify-center w-screen    border-gray-300 text-[30px] font-extralight  border-b-2 '>Tashwin SJ <span className='text-[20px] ml-[700px] text-gray-500'><a target='_blank' href="https://hashnode.com/@Tash">Blogs</a></span> <span className='text-[20px] ml-12 text-gray-500'> <a href="https://drive.google.com/file/d/1B4RZkR6r6I9ZQLD94nONLvGH-dsN7kIE/view?usp=sharing" target='_blank'> Resume</a></span></div>
      <Myintro/>
      <Timeline/>
      <div className="font-bold mr-[950px]  text-gray-500 mb-4">Articles </div>
      <div className="flex  mb-20">   
            <div className="pr-20 w-[660px]">
                <div className="date  text-gray-500 ">May 24 , 2024</div>
                <a target='_blank' href="https://tash.hashnode.dev/llms-58-years-ago-and-58-years-from-now"> <div className="title  text-[20px] font-normal text-blue-500 ">Large Language Model's : 58 years ago and 58 from now</div></a>
                <div className="description font-extralight ">LLMs have transformed the landscape of artificial intelligence, tracing their origins back to the pioneering efforts of the 1960s. Fifty-eight years ago, the concept of teaching machines to understand and generate human language seemed a distant dream.  </div>
            </div>
            <div className="w-[350px] rounded-xl overflow-hidden">
                <img className="" src="https://media.licdn.com/dms/image/D4D12AQGZ6DxnL5h7sQ/article-cover_image-shrink_720_1280/0/1698496109611?e=2147483647&v=beta&t=lukN3JLR_Iw-KTD3G79tU8-2Wuaoyai4bue2WAIsCqg" alt="" />
            </div>
        </div>

        <div className="flex  mb-20">   
            <div className="pr-20 w-[660px]">
                <div className="date  text-gray-500 ">April 13 , 2024</div>
                <div className="title  text-[20px] font-normal text-blue-500 ">Mind-bending new programming language for GPUs just dropped...</div>
                <div className="description font-extralight ">What is the Bend programming language for parallel computing? Let's take a first look at Bend and how it uses a Python-like syntax to write high performance code that can run on the GPU. </div>
            </div>
            <div className="w-[350px] rounded-xl overflow-hidden">
                <img className="" src={cuda} alt="" />
            </div>
        </div>


        <div className="flex  mb-20">   
            <div className="pr-20 w-[660px]">
                <div className="date  text-gray-500 ">January 27 , 2024</div>
                <div className="title  text-[20px] font-normal text-blue-500 ">Another glorious battle for AI dominance… GPT-4o vs Google I/O</div>
                <div className="description font-extralight ">OpenAI recently announced a new model called GPT-4o, just days before Google I/O. Let's recap the announcements at Google I/O and determine who is currently winning the artificial intelligence race. </div>
            </div>
            <div className="w-[350px] rounded-xl overflow-hidden">
                <img className="" src={gpt} alt="" />
            </div>
        </div>


         
      <Footer/>
    </div>
  )
}

export default App


function Myintro(){
  return(
  <>
  
    <div className='flex items-center justify-center h-full mt-20'>

      <div><img className='h-[200px] overflow-hidden flex  items-center justify-center  rounded-full' src={tash} alt="" /></div> 
      <div className='h-[280px] w-[2px] rounded-full mx-28  bg-gray-200'></div>
      <div className='w-[550px]'>I'm a Computer Science Student at <a target='_blank' href="http://cs.pes.edu"><u className='text-blue-400'>PES University</u></a> currently pursuing 
      <br /> bachelor's degree in CSE with specialization in Machine Intelligence and  <br /> Data Science.  <br /> 
      <br />
      My research interests are Dynamic Scene Semantics and <a href="https://ieeexplore.ieee.org/document/8601227" target='_blank'> <u className='text-blue-400'> VSLAM</u> </a>   Visual <br /> Localization and mapping . I am current working 
      with <u><a target='_blank' href="https://staff.pes.edu/nm1112/"> Prof. V R Badriprasad</a></u>  on ways to use VSLAM for dynamic environment , also currently working with  <a href="https://staff.pes.edu/nm1089/"> <u> Dr. Mamatha HR</u></a>  on NLP based techniques for closed domain question generation. You can find my other projects
      on my <a href="https://drive.google.com/file/d/1B4RZkR6r6I9ZQLD94nONLvGH-dsN7kIE/view?usp=sharing" target='_blank'><u className='text-blue-400'>resume</u></a>.

     <div className='my-4 flex gap-4'>
      <a href="https://github.com/Tashwinsj" target='_blank'> <div className="flex  " ><div><img className='h-4 mt-1 m-2' src={github}   /></div>   <div>github</div></div></a> 
      <a href="https://x.com/TashwinSj" target='_blank'> <div className="flex  "><div><img className='h-4 mt-1 m-2' src={twitter}   /></div>   <div>twitter</div></div></a>
      <a href="mailto:tashwinsjprof@gmail.com"><div> ✉️ mail</div></a>  
      <a href="https://hashnode.com/@Tash" target='_blank'> <div className="flex  " ><div><img className='h-4 mt-1 m-2' src={blog}   /></div>   <div>hashnode</div></div></a> 
      <a href="https://www.linkedin.com/in/tashwin-sj-b0278022a/" target='_blank'> <div className="flex  " ><div><img className='h-4 mt-1 m-2' src={link}   /></div>   <div>Linkedin</div></div></a> 

     </div>
     </div>
     
    </div> 
  </>
  )
}