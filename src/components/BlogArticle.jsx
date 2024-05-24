export default  function BlogArticle(){
    return(
        <div className="flex  mb-20">   
            <div className=" w-[660px]">
                <div className="date  text-gray-500 ">May 24 , 2024</div>
                <div className="title  text-[20px] font-normal text-blue-500 ">Large Language Model's : 58 years ago and 58 from now</div>
                <div className="description font-extralight ">LLMs have transformed the landscape of artificial intelligence, tracing their origins back to the pioneering efforts of the 1960s. Fifty-eight years ago, the concept of teaching machines to understand and generate human language seemed a distant dream.  </div>
            </div>
            <div className="w-[350px] rounded-xl overflow-hidden">
                <img className="" src="https://media.licdn.com/dms/image/D4D12AQGZ6DxnL5h7sQ/article-cover_image-shrink_720_1280/0/1698496109611?e=2147483647&v=beta&t=lukN3JLR_Iw-KTD3G79tU8-2Wuaoyai4bue2WAIsCqg" alt="" />
            </div>
        </div>

    )
}