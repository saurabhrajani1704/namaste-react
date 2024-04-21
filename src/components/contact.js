import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-row mb-3 mt-10'>
      <img className='h-[380px] mr-8 mt-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPuEaXEUjg5TXVDbpzk06xSa7k8tjGPJOfusws7apwzhMuAQpX"></img>
      <div>
        <h1 className='font-bold text-6xl mb-7 mb-2'>Help & Support</h1>
        <div className='rounded-lg border-gray-300 border-2 w-[730px] shadow-lg p-4 mb-4'>
          <h2 className='font-bold'>What is Customer Care Number?</h2>
          <p>We've upgraded our customer support to a chat-based system for swift issue resolution. No more navigating through IVRS complexities. Just search for your issue in the help section, start a chat, and a care executive will assist you shortly.</p>
        </div>
        <div className='rounded-lg border-gray-300 border-2 w-[730px] shadow-lg p-4 mb-4'>
          <h2 className='font-bold'>I did not receive my OTP on SMS</h2>
          <p>If you're not receiving the OTP, it's usually due to a network issue. Please check your mobile network settings and try generating a new OTP. If the problem persists, you might want to restart your device or reach out to us at support@foodigy.in for assistance.</p>
        </div>
        <div  className='rounded-lg border-gray-300 border-2 w-[730px] shadow-lg p-4 mb-4'>
          <h2 className='font-bold'>I am unable to find the restaurant I'm looking for?</h2>
          <p>The restaurant might either be closed at the moment or temporarily not serviceable due to low rider availability near the restaurant. Please try again after some time or consider ordering from a different eatery.</p>
        </div>
      </div>
    </div>
  )
}


export default Contact;