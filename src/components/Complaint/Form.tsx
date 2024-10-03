import { FormEvent, ChangeEvent, useState } from 'react';
import instance from '../../api/instance'
import toast, { Toaster } from 'react-hot-toast';
import { PhotoIcon } from '@heroicons/react/24/solid'

export default function Form() {
    const [comData, setCompData] = useState({
        name: "",
        number: "",
        description: "",
        photos: []
    })

    const changeHandler = async (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCompData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            instance.post('/complaint', comData)
              toast.success('تم ارسال الشكوى بنجاح', {
                            duration: 2000,
                            position: 'top-center',
                            className: 'bg-blue-100',
                            icon: '👏',
                    }
                )
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    return (
        <form className='bg-[#F8F0E5] lg:w-5/12 p-3 rounded-xl' onSubmit={(e) => submitHandler(e)}>
            <Toaster position="top-center" reverseOrder={false} />
            <div className="space-y-2">

                <div className="space-y-1">
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        اسم مقدم الشكوى
                    </label>
                    <div className="flex rounded-md shadow-sm w-full">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="الاسم و الكنية"
                            autoComplete="name"
                            value={comData.name}
                            onChange={(e) => { changeHandler(e) }}
                            className="bg-white block flex-1 rounded-lg px-3 py-1.5 placeholder:text-gray-400 sm:text-sm w-full sm:leading-6"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                        رقم التواصل:
                    </label>
                    <div className="flex rounded-md shadow-sm w-full">
                        <input
                            id="number"
                            name="number"
                            type="text"
                            placeholder="هاتف ثابت أو موبايل"
                            autoComplete="number"
                            value={comData.number}
                            onChange={(e) => { changeHandler(e) }}
                            className="bg-white block flex-1 rounded-lg px-3 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm w-full sm:leading-6"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                        مضمون الشكوى:<span className='text-red-900'>*</span>
                    </label>
                    <div>
                        <textarea
                            id="description"
                            name="description"
                            rows={2}
                            value={comData.description}
                            onChange={(e) => { changeHandler(e) }}
                            placeholder='شرح طبيعة الشكوى أو المخالفة ........'
                            className="block px-3 w-full rounded-md py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                        الصور المرفقة :
                    </label>
                    <div className="bg-white flex justify-center rounded-lg px-6 py-3">
                        <div className="text-center">
                            <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                            <div className="items-center justify-center flex text-xs leading-6 text-gray-600">
                                <label
                                    htmlFor="photos"
                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-gray-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                    <span>اضغط لإضافة صور أو اسحب الصور وافلت هنا</span>
                                    <input
                                        id="photos"
                                        name="photos"
                                        type="file"
                                        value={comData.photos}
                                        onChange={(e) => { changeHandler(e) }}
                                        className="sr-only" />
                                </label>
                            </div>
                            <p className="text-xs font-semibold leading-6 text-gray-600">يجب ألا يتجاوز حجم الصورة 2 ميغابايت وعدد الصور 1</p>
                        </div>
                    </div>
                </div>
            </div>

            <button
                type="submit"
                className="w-full my-3 rounded-md bg-primary py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                إرسال الشكوى
            </button>
        </form>
    )
}
