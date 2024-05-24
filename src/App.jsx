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
      <div className='header h-16 md:flex  sm:p-4   items-center justify-center w-screen border-gray-300 md:text-[30px] sm:text-[24px] md:font-extralight sm:font-normal   border-b-2 '>Tashwin SJ <span className='text-[20px] md:ml-[700px] sm:ml-[90px] text-gray-500'><a target='_blank' href="https://hashnode.com/@Tash">Blogs</a></span> <span className='text-[20px] md:ml-12 sm:ml-4  text-gray-500'> <a href="https://drive.google.com/file/d/1B4RZkR6r6I9ZQLD94nONLvGH-dsN7kIE/view?usp=sharing" target='_blank'> Resume</a></span></div>
      <Myintro/>
      <Timeline/>
      <div className="font-bold md:mr-[950px]   text-gray-500 mb-4">Articles </div>
      <div className="md:flex  md:flex-row sm:flex sm:flex-col-reverse mb-20">   
            <div className="md:pr-20 sm:p-2 md:w-[680px] sm:w-[300px]">
                <div className="date  text-gray-500 ">May 24 , 2024</div>
                <a target='_blank' href="https://tash.hashnode.dev/llms-58-years-ago-and-58-years-from-now"> <div className="title  text-[20px] font-normal text-blue-500 ">Large Language Model's : 58 years ago and 58 from now</div></a>
                <div className="description font-extralight ">LLMs have transformed the landscape of artificial intelligence, tracing their origins back to the pioneering efforts of the 1960s. Fifty-eight years ago, the concept of teaching machines to understand and generate human language seemed a distant dream.  </div>
            </div>
            <div className="md:w-[350px] sm:w-[300px] rounded-xl overflow-hidden">
                <img className="" src="https://media.licdn.com/dms/image/D4D12AQGZ6DxnL5h7sQ/article-cover_image-shrink_720_1280/0/1698496109611?e=2147483647&v=beta&t=lukN3JLR_Iw-KTD3G79tU8-2Wuaoyai4bue2WAIsCqg" alt="" />
            </div>
        </div>

        <div className="md:flex  md:flex-row sm:flex sm:flex-col-reverse  mb-20">   
            <div className="md:pr-20 sm:p-2 md:w-[680px] sm:w-[300px]">
                <div className="date  text-gray-500 ">April 13 , 2024</div>
                <div className="title  text-[20px] font-normal text-blue-500 ">Mind-bending new programming language for GPUs just dropped...</div>
                <div className="description font-extralight ">What is the Bend programming language for parallel computing? Let's take a first look at Bend and how it uses a Python-like syntax to write high performance code that can run on the GPU. </div>
            </div>
            <div className="md:w-[350px] sm:w-[300px] rounded-xl overflow-hidden">
                <img className="" src={cuda} alt="" />
            </div>
        </div>


        <div className="md:flex  md:flex-row sm:flex sm:flex-col-reverse  mb-20">   
            <div className="md:pr-20 sm:p-2 md:w-[680px] sm:w-[300px]">
                <div className="date  text-gray-500 ">January 27 , 2024</div>
                <div className="title  text-[20px] font-normal text-blue-500 ">Another glorious battle for AI dominance… GPT-4o vs Google I/O</div>
                <div className="description font-extralight ">OpenAI recently announced a new model called GPT-4o, just days before Google I/O. Let's recap the announcements at Google I/O and determine who is currently winning the artificial intelligence race. </div>
            </div>
            <div className="md:w-[350px] sm:w-[300px] rounded-xl overflow-hidden">
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
  
    <div className='md:flex md:flex-row sm:flex sm:flex-col items-center justify-center h-full mt-20'>

      <div><img className='h-[200px]  overflow-hidden flex  items-center justify-center  rounded-full' src={tash} alt="" /></div> 
      <div className='md:h-[280px] sm:h-0  w-[2px] rounded-full mx-28  bg-gray-200'></div>
      <div className='md:w-[550px] sm:w-[350px] md:px-0 sm:px-4  sm:mt-20 md:mt-0  md:text-black '>I'm a Computer Science Student at <a target='_blank' href="http://cs.pes.edu"><u className='text-blue-400'>PES University</u></a> currently pursuing 
       bachelor's degree in CSE with specialization in Machine Intelligence and    Data Science.  <br /> 
      <br />
      My research interests are Dynamic Scene Semantics and <a href="https://ieeexplore.ieee.org/document/8601227" target='_blank'> <u className='text-blue-400'> VSLAM</u> </a>   Visual <br /> Localization and mapping. I am current working 
      with <u><a target='_blank' href="https://staff.pes.edu/nm1112/"> Prof. V R Badriprasad</a></u>  on ways to use VSLAM for dynamic environment , also currently working with  <a href="https://staff.pes.edu/nm1089/"> <u> Dr. Mamatha HR</u></a>  on NLP based techniques for closed domain question generation. You can find my other projects
      on my <a href="https://drive.google.com/file/d/1B4RZkR6r6I9ZQLD94nONLvGH-dsN7kIE/view?usp=sharing" target='_blank'><u className='text-blue-400'>resume</u></a>.

     <div className='my-4 md:text-[16px] sm:text-[10px] sm:font-bold md:font-normal flex md:gap-4 sm:gap-1'>
      <a href="https://github.com/Tashwinsj" target='_blank'> <div className="flex  " ><div><img className='md:h-4 sm:h-2 md:mt-1 sm:ml-0  sm:m-2 sm:mt-1 ' src={github}   /></div>   <div>github</div></div></a> 
      <a href="https://x.com/TashwinSj" target='_blank'> <div className="flex  "><div><img className='md:h-4 sm:h-2 md:mt-1 md:m-2 sm:m-2 sm:mt-1 ' src={twitter}   /></div>   <div>twitter</div></div></a>
      <a href="mailto:tashwinsjprof@gmail.com"><div className='md:h-4 sm:h-2'> ✉️ mail</div></a>  
      <a href="https://hashnode.com/@Tash" target='_blank'> <div className="flex  " ><div><img className='md:h-4 sm:h-2 md:mt-1 md:m-2 sm:m-2 sm:mt-1 ' src={blog}   /></div>   <div>hashnode</div></div></a> 
      <a href="https://www.linkedin.com/in/tashwin-sj-b0278022a/" target='_blank'> <div className="flex  " ><div><img className='md:h-4 sm:h-2 md:mt-1 md:m-2 sm:m-2 sm:mt-1 ' src={link}   /></div>   <div>Linkedin</div></div></a> 

     </div>
     </div>
     
    </div> 
  </>
  )
}