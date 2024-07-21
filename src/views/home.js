import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Label from '../components/label'
import MemberDetails from '../components/member-details'
import ServiceCard from '../components/service-card'
import SecondaryButton from '../components/secondary-button'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Notus Pro</title>
        <meta property="og:title" content="Notus Pro" />
      </Helmet>
      <div background-position="center center" className="home-hero">
        <div className="home-bg"></div>
        <Header
          contact={
            <fragment>
              <span>Contact</span>
            </fragment>
          }
          heading1="fzsolutions"
          ouroffer={
            <fragment>
              <span>Our offer</span>
            </fragment>
          }
        ></Header>
        <div className="home-container01">
          <div className="home-container02">
            <h1 className="home-text02">
              Are you ready to miss out on one of the biggest technological
              revolutions?
            </h1>
            <span className="home-text03">Or you want to be a part of it?</span>
          </div>
          <img alt="image" src="/gray-vector.svg" className="home-image" />
          <img alt="image" src="/white-vector.svg" className="home-image1" />
        </div>
      </div>
      <div className="home-section1">
        <div className="home-container03">
          <div className="home-container04">
            <h3 className="home-text04 Healine">
              Automating your business with AI
            </h3>
            <strong className="home-text05">
              Our mission is to support our clients in automating and scaling
              their businesses through the power of AI. We achieve this by
              developing innovative, user-friendly AI tools designed to enhance
              efficiency, drive growth, and provide a competitive edge. By
              leveraging cutting-edge technology, we aim to simplify complex
              processes and empower businesses to reach their full potential.
            </strong>
          </div>
          <div className="home-cards-container">
            <div className="home-card1">
              <div className="home-container05">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M639.403 658.091l32 241.152-137.429-82.475c-13.269-7.851-29.995-8.363-43.904 0l-137.429 82.475 32.043-241.109c39.296 15.829 82.304 24.533 127.317 24.533s88.021-8.747 127.403-24.576zM654.165 554.283c-2.475 1.28-4.821 2.773-6.955 4.48-39.253 24.448-85.547 38.571-135.211 38.571-70.699 0-134.656-28.587-181.035-74.965s-74.965-110.336-74.965-181.035 28.587-134.656 74.965-181.035 110.336-74.965 181.035-74.965 134.656 28.587 181.035 74.965 74.965 110.336 74.965 181.035-28.587 134.656-74.965 181.035c-11.861 11.861-24.875 22.571-38.869 31.915zM304.64 612.48l-48.256 363.221c-3.115 23.339 13.312 44.8 36.693 47.915 9.984 1.323 19.669-0.939 27.563-5.717l191.36-114.816 191.403 114.816c20.224 12.117 46.421 5.589 58.539-14.635 5.205-8.661 6.955-18.389 5.717-27.563l-48.213-363.307c11.947-9.173 23.296-19.115 33.92-29.739 61.696-61.696 99.968-147.072 99.968-241.323s-38.272-179.627-99.968-241.365-147.115-99.968-241.365-99.968-179.627 38.272-241.365 99.968-99.968 147.115-99.968 241.365 38.272 179.627 99.968 241.365c10.667 10.667 22.016 20.608 33.963 29.781z"></path>
                </svg>
              </div>
              <h6 className="home-text06 TextXL">Innovative Solutions</h6>
              <span className="home-text07">
                Our AI tools are designed with the future in mind. We offer
                innovative solutions that help businesses optimize processes,
                save time and resources, and increase productivity. Join our
                satisfied clients and see how AI technology can transform your
                operations.
              </span>
            </div>
            <div className="home-card2">
              <div className="home-container06">
                <svg
                  viewBox="0 0 1097.142857142857 1024"
                  className="home-icon02"
                >
                  <path d="M731.429 859.429c0 9.714-8.571 18.286-18.286 18.286h-548.571c-21.143 0-18.286-22.286-18.286-36.571v-329.143h-109.714c-20 0-36.571-16.571-36.571-36.571 0-8.571 2.857-17.143 8.571-23.429l182.857-219.429c6.857-8 17.143-12.571 28-12.571s21.143 4.571 28 12.571l182.857 219.429c5.714 6.286 8.571 14.857 8.571 23.429 0 20-16.571 36.571-36.571 36.571h-109.714v219.429h329.143c5.143 0 10.857 2.286 14.286 6.286l91.429 109.714c2.286 3.429 4 8 4 12zM1097.143 621.714c0 8.571-2.857 17.143-8.571 23.429l-182.857 219.429c-6.857 8-17.143 13.143-28 13.143s-21.143-5.143-28-13.143l-182.857-219.429c-5.714-6.286-8.571-14.857-8.571-23.429 0-20 16.571-36.571 36.571-36.571h109.714v-219.429h-329.143c-5.143 0-10.857-2.286-14.286-6.857l-91.429-109.714c-2.286-2.857-4-7.429-4-11.429 0-9.714 8.571-18.286 18.286-18.286h548.571c21.143 0 18.286 22.286 18.286 36.571v329.143h109.714c20 0 36.571 16.571 36.571 36.571z"></path>
                </svg>
              </div>
              <h6 className="home-text08 TextXL">Customizable Tools</h6>
              <span className="home-text09">
                Every business is unique, which is why our AI tools are fully
                customizable to meet the specific needs of your company. We
                provide flexible solutions that can be easily adapted to
                different industries and business models, ensuring maximum
                efficiency and ease of use.
              </span>
            </div>
            <div className="home-card3">
              <div className="home-container07">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M636 938h-6q-92-24-158-90-38-38-65-103t-27-119q0-52 38-89t92-37 93 37 39 89q0 34 25 58t63 24 64-24 26-58q0-120-91-206t-219-86q-92 0-168 47t-114 125q-24 50-24 120 0 80 28 154 6 20-14 26t-26-12q-32-82-32-168 0-78 30-138 42-90 129-144t191-54q146 0 249 99t103 237q0 52-39 88t-93 36-92-36-38-88q0-34-26-59t-64-25-63 25-25 59q0 112 80 192 56 56 140 78 18 2 14 26-4 16-20 16zM530 626q0 74 55 128t137 54q4 0 18-2t23-2 18 3 11 13q4 22-18 26-24 4-52 4-80 0-132-38-102-70-102-186 0-22 22-22 20 0 20 22zM416 930q-8 0-14-6-54-54-86-114-46-80-46-184 0-94 71-162t171-68 171 68 71 162q0 20-22 20t-22-20q0-78-58-133t-140-55-140 55-58 133q0 96 38 164 26 46 80 104 16 14 0 30-6 6-16 6zM150 414q-22 0-22-20 0-4 4-12 64-92 160-140 100-52 220-52t220 52q98 48 160 138 4 8 4 12 0 14-16 20t-24-8q-60-82-144-124-92-46-200-47t-200 47q-90 46-146 126-6 8-16 8zM760 190q-8 0-10-2-118-60-238-60-130 0-238 60-10 6-20 0t-10-18q0-14 10-20 116-64 258-64 130 0 258 64 18 10 8 28-8 12-18 12z"></path>
                </svg>
              </div>
              <h6 className="home-text10 TextXL">Expert Guidance</h6>
              <span className="home-text11">
                We provide expert guidance to help you navigate the complexities
                of AI technology. Our team of specialists is dedicated to
                ensuring that you get the most out of our tools, offering
                personalized support and advice every step of the way. Let us
                help you achieve real benefits and a competitive edge through AI
                innovation.
              </span>
            </div>
          </div>
          <div className="home-work-with-us">
            <div className="home-container08">
              <div className="home-container09">
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M384 554q64 0 140 18t139 60 63 94v128h-684v-128q0-52 63-94t139-60 140-18zM640 512q-26 0-56-10 56-66 56-160 0-38-16-86t-40-76q30-10 56-10 70 0 120 51t50 121-50 120-120 50zM214 342q0-70 50-121t120-51 120 51 50 121-50 120-120 50-120-50-50-120zM712 560q106 16 188 59t82 107v128h-172v-128q0-98-98-166z"></path>
                </svg>
              </div>
              <h3 className="home-text12 Healine">
                Work with us is a pleasure
              </h3>
              <span className="home-text13">
                <span>
                  Working with us is a pleasure! We provide innovative,
                  customizable AI solutions tailored to your needs, backed by
                  expert support at every step. Transform your business and
                  enjoy seamless, efficient, and rewarding collaboration.
                </span>
                <br></br>
              </span>
              <span className="home-text16">
                Discover what we can do for your success!
              </span>
            </div>
            <div className="home-container10">
              <div className="home-container11">
                <img alt="image" src="/blue_wave.svg" className="home-image2" />
              </div>
              <div className="home-container12">
                <h4 className="home-text17 Healine">
                  <span className="home-text18">AI powered services</span>
                  <br></br>
                </h4>
                <span className="home-text20">
                  <span>
                    Enhance your business with AI-powered services! Our advanced
                    AI solutions optimize operations, improve customer
                    experiences, and drive innovation.
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <img alt="image" src="/white-vector.svg" className="home-image3" />
      </div>
      <div className="home-section2">
        <div className="home-container13">
          <Label text="WITH BURNED SOLES​"></Label>
          <h1 className="home-text23">
            <span>Our main working model is...</span>
            <br className="Text2XL"></br>
          </h1>
          <span className="home-text26 TextXL">get it done.</span>
        </div>
        <div className="home-growing-company-section">
          <img
            alt="image"
            src="/laptop-6062423_1280-1400w.jpg"
            className="home-image4"
          />
          <div className="home-container14">
            <h3 className="home-text27 Healine">A growing company</h3>
            <span className="home-text28">
              As a new company, we prioritize fast and efficient service
              delivery for our clients. We are committed to completing every
              project to the highest standard, ensuring quick turnaround times
              and exceptional quality. Experience our dedication to excellence
              and speed in every task we undertake.
            </span>
            <div className="home-container15">
              <div className="home-container16">
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M636 938h-6q-92-24-158-90-38-38-65-103t-27-119q0-52 38-89t92-37 93 37 39 89q0 34 25 58t63 24 64-24 26-58q0-120-91-206t-219-86q-92 0-168 47t-114 125q-24 50-24 120 0 80 28 154 6 20-14 26t-26-12q-32-82-32-168 0-78 30-138 42-90 129-144t191-54q146 0 249 99t103 237q0 52-39 88t-93 36-92-36-38-88q0-34-26-59t-64-25-63 25-25 59q0 112 80 192 56 56 140 78 18 2 14 26-4 16-20 16zM530 626q0 74 55 128t137 54q4 0 18-2t23-2 18 3 11 13q4 22-18 26-24 4-52 4-80 0-132-38-102-70-102-186 0-22 22-22 20 0 20 22zM416 930q-8 0-14-6-54-54-86-114-46-80-46-184 0-94 71-162t171-68 171 68 71 162q0 20-22 20t-22-20q0-78-58-133t-140-55-140 55-58 133q0 96 38 164 26 46 80 104 16 14 0 30-6 6-16 6zM150 414q-22 0-22-20 0-4 4-12 64-92 160-140 100-52 220-52t220 52q98 48 160 138 4 8 4 12 0 14-16 20t-24-8q-60-82-144-124-92-46-200-47t-200 47q-90 46-146 126-6 8-16 8zM760 190q-8 0-10-2-118-60-238-60-130 0-238 60-10 6-20 0t-10-18q0-14 10-20 116-64 258-64 130 0 258 64 18 10 8 28-8 12-18 12z"></path>
                </svg>
              </div>
              <span className="home-text29">Carefully crafted tools</span>
            </div>
            <div className="home-container17">
              <div className="home-container18">
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M917.806 357.076c-22.21-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-368c-44.114 0-80 35.888-80 80v736c0 44.112 35.886 80 80 80h608c44.112 0 80-35.888 80-80v-496c0-14.332-4.372-39.35-42.194-90.924zM785.374 302.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.982 17.78 50.678 41.878 81.374 72.572v0zM896 944c0 8.672-7.328 16-16 16h-608c-8.672 0-16-7.328-16-16v-736c0-8.672 7.328-16 16-16 0 0 367.956-0.002 368 0v224c0 17.672 14.324 32 32 32h224v496z"></path>
                  <path d="M602.924 42.196c-51.574-37.822-76.592-42.196-90.924-42.196h-368c-44.112 0-80 35.888-80 80v736c0 38.632 27.528 70.958 64 78.39v-814.39c0-8.672 7.328-16 16-16h486.876c-9.646-7.92-19.028-15.26-27.952-21.804z"></path>
                </svg>
              </div>
              <span className="home-text30">
                Carefully prepared documentation
              </span>
            </div>
            <div className="home-container19">
              <div className="home-container20">
                <svg
                  viewBox="0 0 1024.5851428571427 1024"
                  className="home-icon13"
                >
                  <path d="M1008 6.286c12 8.571 17.714 22.286 15.429 36.571l-146.286 877.714c-1.714 10.857-8.571 20-18.286 25.714-5.143 2.857-11.429 4.571-17.714 4.571-4.571 0-9.143-1.143-13.714-2.857l-301.143-122.857-170.286 186.857c-6.857 8-16.571 12-26.857 12-4.571 0-9.143-0.571-13.143-2.286-14.286-5.714-23.429-19.429-23.429-34.286v-258.286l-269.714-110.286c-13.143-5.143-21.714-17.143-22.857-31.429-1.143-13.714 6.286-26.857 18.286-33.714l950.857-548.571c12-7.429 27.429-6.857 38.857 1.143zM812.571 862.857l126.286-756-819.429 472.571 192 78.286 493.143-365.143-273.143 455.429z"></path>
                </svg>
              </div>
              <span className="home-text31">Easily scalable tools</span>
            </div>
          </div>
        </div>
        <div className="home-team">
          <div className="home-container21">
            <div className="home-container22">
              <MemberDetails imageSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"></MemberDetails>
            </div>
            <div className="home-container23">
              <MemberDetails
                heading1="Romina Hadid"
                heading11="Marketing Specialist"
                imageSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              ></MemberDetails>
            </div>
            <div className="home-container24">
              <MemberDetails
                heading1="Alexa Smith"
                heading11="UI/UX Designer"
                imageSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              ></MemberDetails>
            </div>
            <div className="home-container25">
              <MemberDetails
                heading1="Jenna Kardi"
                heading11="Founder and ceo"
                imageSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              ></MemberDetails>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section3">
        <img alt="image" src="/gray-vector.svg" className="home-image5" />
        <div className="home-container26">
          <h3 className="home-text32">
            <span>
              Do you still want to miss out on one of the greatest technological
              revolutions?
            </span>
            <span className="Healine"> </span>
          </h3>
          <span className="home-text35 TextXL">
            <span>Or you want to join and became a part of it?</span>
            <br></br>
          </span>
          <div className="home-services">
            <div className="home-container27">
              <div className="home-container28">
                <svg viewBox="0 0 1024 1024" className="home-icon15">
                  <path d="M832 192v-128h-640v128h-192v128c0 106.038 85.958 192 192 192 20.076 0 39.43-3.086 57.62-8.802 46.174 66.008 116.608 113.796 198.38 130.396v198.406h-64c-70.694 0-128 57.306-128 128h512c0-70.694-57.306-128-128-128h-64v-198.406c81.772-16.6 152.206-64.386 198.38-130.396 18.19 5.716 37.544 8.802 57.62 8.802 106.042 0 192-85.962 192-192v-128h-192zM192 436c-63.962 0-116-52.038-116-116v-64h116v64c0 40.186 7.43 78.632 20.954 114.068-6.802 1.246-13.798 1.932-20.954 1.932zM948 320c0 63.962-52.038 116-116 116-7.156 0-14.152-0.686-20.954-1.932 13.524-35.436 20.954-73.882 20.954-114.068v-64h116v64z"></path>
                </svg>
              </div>
              <h1 className="home-text38 TextXL">Grow your market</h1>
              <span className="home-text39">
                Are you stuck with scaling you business? Sending 100 emails per
                day and it still doesn&apos;t bring you the desired results? We
                will automate your outreach so you can just watch how your
                business grow.
              </span>
            </div>
            <ServiceCard text="Experience top-notch, efficient service delivery with our expert team. We provide high-quality, innovative solutions tailored to your needs, ensuring rapid turnaround and exceptional results. Let us help you achieve your goals with our excellent services today!"></ServiceCard>
            <div className="home-container29">
              <div className="home-container30">
                <svg viewBox="0 0 1024 1024" className="home-icon17">
                  <path d="M726 726v-172h-86v172h86zM554 726v-428h-84v428h84zM384 726v-300h-86v300h86zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h596z"></path>
                </svg>
              </div>
              <h1 className="home-text40 TextXL">Management</h1>
              <span className="home-text41">
                Do you need to manage every reservation by yourself? We have a
                solution for it, so you will be able to work on more important
                things.
              </span>
            </div>
          </div>
          <div className="home-contact">
            <Label text="MESSAGE US"></Label>
            <h2 className="home-text42">Type in the bellow form</h2>
            <span className="home-text43 TextXL">
              If you want to start using AI and bring your business to the next
              level.
            </span>
            <div className="home-form">
              <h1 className="home-text44">Want to work with us?</h1>
              <span className="home-text45 TextXL">
                Complete this form and we will get back to you in 24 hours.
              </span>
              <span className="home-text46 TextXS">FULL NAME</span>
              <input
                type="text"
                placeholder="Full Name"
                className="home-textinput TextSM input"
              />
              <span className="home-text47 TextXS">EMAIL</span>
              <input
                type="text"
                placeholder="Email"
                className="home-textinput1 TextSM input"
              />
              <span className="home-text48 TextXS">MESSAGE</span>
              <textarea
                cols="80"
                rows="4"
                disabled="true"
                placeholder="Type a message"
                className="home-textarea TextSM textarea"
              ></textarea>
              <div className="home-container31">
                <div className="home-container32">
                  <SecondaryButton
                    button="Send message"
                    rootClassName="secondary-button-root-class-name"
                  ></SecondaryButton>
                </div>
              </div>
              <button type="button" className="home-button button">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
