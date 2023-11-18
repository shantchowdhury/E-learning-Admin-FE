import React from 'react';
import PostBody from '../../components/CreatePost/LeftSide';
import UploadFile from '../../components/CreatePost/RightSide';

const CreatePost = () => {

    return (
<<<<<<< HEAD
        <div className='flex mt-11 mb-5 px-16 w-full'>
            <div>
                <div className='mb-10'>
                    <input className='pl-3 p-3 focus:outline-none' type="text" name="" id="postTitle" placeholder='Post Title' />
                </div>
                <div id='editor'>
                    <CKEditor
                        editor={Editor}
                        data="<p>Hello, Welcome to Non Academy</p>"
                        onReady={editor => {
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                        }}
                        onBlur={(event, editor) => {
                        }}
                        onFocus={(event, editor) => {
                        }}
                    />
                </div>
            </div>
            <div className='pl-14 w-full'>

                <div className='flex p-4 items-center img-section justify-between'>
                    <p>
                        Feature image
                    </p>
                    <div>
                        <label> Upload
                            <input type="file" id='post-image' accept=".png, .jpg, .jpeg" onChange={handleChangeImg} />
                        </label>
                    </div>
                </div>
                {
                    file ?
                        <img src={file} alt="" className='w-full object-cover border-b-5 h-40' />
                        :
                        <div className='img-preview-section flex items-center justify-center w-full h-40'>
                            <p className='text-center font-poppins'>Preview</p>
                        </div>
                }

                <div className='mt-10'>
                    <select id="category" className=" font-poppins w-full py-2 px-2 focus:outline-none">
                        <option selected>Select category</option>
                        <option value="web">Web Development</option>
                        <option value="BlC">Block Chain</option>
                    </select>
                </div>

                <div className='mt-10'>
                    <textarea rows="4" id="meta-description" className="font-poppins p-2.5 w-full h-40 focus:outline-none" onKeyUp={handelCount} placeholder="Meta description"></textarea>
                </div>
                <div className='count-character-section'>
                    <p className='text-right px-4 py-1'>Total character limit <span className='count-character' id="total_letters">0</span></p>
                </div>


                <div className='flex justify-end mt-10'>
                    <div>
                        <button id='post-save' className=" py-[13px] px-[30px] bg-[#D7AB56] text-white font-inter rounded-xl mr-3">
                            Save
                        </button>
                    </div>
                    <div>
                        <button className="py-[13px] px-[30px] bg-[#2E9987] text-white font-inter rounded-xl">
                            Publish
                        </button>
                    </div>
                </div>
            </div>

=======
        <div className='flex mt-11 mb-5 px-10 w-full'>
            <PostBody></PostBody>
            <UploadFile></UploadFile>
>>>>>>> origin/development
        </div>
    )
}

export default CreatePost;
