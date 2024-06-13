"use client"; // This is a client component 👈🏽
import Image from "next/image";

interface Props {}
const Body: React.FC<Props> = ({}) => {
  return (
    <>
      {/* Urify Premium */}
      <div className="ms-[46px] me-[6px] mt-[61.51px]  relative">
        <div className="flex flex-col xl:flex-row">
          <div className="w-full xl:w-1/2 flex justify-center xl:block xl:justify-start relative">
            <Image
              src="/img/gradient-premium.png"
              className="slide-up-fade-in absolute top-[94px] xl:top-[32px] left-[235px] xl:left-[32px]"
              width={493}
              height={385}
              alt="gradient-premium"
            />
            <Image
              src="/img/Group-Urify.png"
              width={713}
              height={713}
              className="z-5 relative"
              alt="Group-Urify"
            />
          </div>
          <div
            id="features"
            className="flex flex-col items-center xl:block w-full xl:w-1/2 mt-[128px] relative"
          >
            <p className="text-[18px] font-medium tracking-[0.6rem] font-[ClashDisplay] text-[#FF5555] leading-[28px]">
              FEATURES
            </p>
            <p className="font-bold font-[ClashDisplay] text-[48px] leading-[48px] text-black mt-[4px]">
              Urify Premium
            </p>
            <div className="flex flex-col items-center xl:block w-full h-[96px] mt-[24px]">
              <div className="flex items-center gap-x-1">
                <Image
                  width={24}
                  height={24}
                  src="/img/star-05.png"
                  alt="star"
                />
                <p className="text-black text-start font-semibold font-[ClashDisplay] text-[18px] leading-[28px]">
                  Budgetting Intervals
                </p>
              </div>
              <p className="mt-[12px] font-medium font-[ClashDisplay] text-[18px] leading-[28px] text-[#000000] opacity-50 max-w-[638px]">
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
                Porttitor.
              </p>
            </div>
            <div className="flex flex-col items-center xl:block w-full h-[96px] mt-[24px]">
              <div className="flex items-center gap-x-1">
                <Image
                  width={24}
                  height={24}
                  src="/img/cube-02.png"
                  alt="cube"
                />
                <p className="text-black font-semibold font-[ClashDisplay] text-[18px] leading-[28px]">
                  Budgetting Intervals
                </p>
              </div>
              <p className="mt-[12px] font-medium opacity-50 max-w-[638px] font-[ClashDisplay] text-[18px] leading-[28px] text-[#000000]">
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
                Porttitor.
              </p>
            </div>
            <div className="flex flex-col items-center xl:block w-full h-[96px] mt-[24px]">
              <div className="flex items-center gap-x-1">
                <Image
                  width={24}
                  height={24}
                  src="/img/cube-04.png"
                  alt="cube"
                />
                <p className="text-black font-semibold font-[ClashDisplay] text-[18px] leading-[28px]">
                  Budgetting Intervals
                </p>
              </div>
              <p className="mt-[12px] opacity-50 max-w-[638px] font-medium font-[ClashDisplay] text-[18px] leading-[28px] text-[#000000]">
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
                Porttitor.
              </p>
            </div>
            <Image
              src="/img/gradient.png"
              width={327}
              height={237}
              className="absolute bottom-0 right-[-10px] top-[-104px]"
              alt="phone"
            />
          </div>
        </div>
        <Image
          width={48}
          height={48}
          className="invisible xl:visible absolute left-[-22px] top-[123px]"
          src="/img/star-premium.png"
          alt="star-premium"
        />
      </div>

      {/* Why choose Urify */}
      <div
        id="pricing"
        className="ms-[32px] xl:ms-[175px] me-[25.1px] mt-[62px] relative"
      >
        <div className="flex flex-col-reverse xl:flex-row justify-center">
          <div className="w-full flex flex-col items-center xl:block xl:justify-start xl:w-[535px] h-auto mt-[118px]">
            <p className="text-[18px] text-[#FF5555] leading-[28px] tracking-[0.6rem] font-medium font-[ClashDisplay]">
              ADVANTAGES
            </p>
            <p className="mt-[6px] text-[#000000] font-bold font-[ClashDisplay] text-[48px] leading-[48px]">
              Why Choose Urify?
            </p>
            <div className="mt-[32px]">
              <div className="flex gap-x-3.5 items-center">
                <div className="relative w-[48px] h-[48px] rounded-full bg-[#FF5555]">
                  <Image
                    width={48}
                    height={48}
                    className="absolute w-[17.48px] h-[19px] top-[14px] left-[14.26px]"
                    src="/img/icon-bell.png"
                    alt="icon-bell"
                  />
                </div>
                <p className="text-[28px] leading-[28px] font-[ClashDisplay] font-semibold text-[#000000]">
                  Clever Notifications
                </p>
              </div>
              <p className="mt-[23px] text-[18px] leading-[28px] opacity-50 max-w-[535px] font-medium font-[ClashDisplay] text-[#000000] text-center xl:text-left">
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
          </div>
          <div className="w-full xl:w-1/2 relative flex justify-center xl:block">
            <Image
              className="relative z-5"
              width={713}
              height={713}
              src="/img/sensus.svg"
              alt="Group-choose-urify"
            />
          </div>
        </div>
        <Image
          width={64}
          height={64}
          className="absolute invisible xl:visible right-[-12px] top-[34px]"
          src="/img/star-urify.png"
          alt="star-urify"
        />
      </div>

      {/* Customizable */}
      <div className="mx-[32px] me-[32px] xl:ms-[46px] xl:me-[148px] relative">
        <div className="flex flex-col xl:flex-row items-center">
          <div className="w-full xl:w-1/2 relative flex justify-center xl:block">
            <Image
              src="/img/credit-card-phone.png"
              className="relative z-10"
              alt="Group-customizable"
              width={719}
              height={719}
            />
          </div>
          <div className="w-full xl:w-1/2 h-[211px] flex flex-col items-center justify-center xl:block">
            <div className="flex items-center gap-x-2.5">
              <Image
                width={48}
                height={48}
                src="/img/round-custom.png"
                alt="round-custom"
              />
              <p className=" text-[28px] leading-[28px] font-semibold font-[ClashDisplay]">
                Fully Customizable
              </p>
            </div>
            <p className="mt-[23px] opacity-50 max-w-[562px] font-medium font-[ClashDisplay] text-[18px] leading-[28px] text-[#000000] text-center xl:text-left">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
        <Image
          width={48}
          height={48}
          className="absolute invisible xl:visible top-[-55px] left-[544px]"
          src="/img/star-customize-1.png"
          alt="star-custom-1"
        />
        <Image
          width={64}
          height={64}
          className="absolute invisible xl:visible bottom-0 right-[44px]"
          src="/img/star-customize-2.png"
          alt="star-custom-1"
        />
      </div>

      {/* Users Feedback */}
      <div
        id="about"
        className="ms-[32px] me-[32px] xl:ms-[80px] xl:me-[175px] mt-[120px] relative"
      >
        <p className="text-[18px] leading-[28px] tracking-[0.5rem] text-center font-medium font-[ClashDisplay] text-[#000000]">
          TESTIMONAL
        </p>
        <p className="mt-[4px] text-[48px] leading-[48px] text-center text-[#000000] font-bold font-[ClashDisplay]">
          What Our Users Say About Us?
        </p>
        <div className="flex flex-col xl:flex-row relative mt-[32px] gap-x-5">
          <div className="w-full xl:w-1/2 relative flex justify-center xl:block">
            <Image
              src="/img/Group-user-feedback.png"
              className="h-auto left-0 top-0 relative z-10"
              alt="Group-user-feedback"
              width={713}
              height={713}
            />
            <Image
              className="absolute top-[109px] left-[196px] xl:left-[-2px]"
              src="/img/gradient-user.png"
              alt="gradient-user"
              width={527}
              height={437}
            />
          </div>
          <div className="w-full xl:w-1/2 flex flex-col items-center justify-center xl:block mt-[72px]">
            <p className="text-[28px] leading-[28px] max-w-[442px] font-[ClashDisplay] font-semibold text-[#000000] text-center xl:text-left">
              The Best Financial Accounting App Ever!
            </p>
            <p className="mt-[24px] opacity-50 max-w-[442px] text-[18px] leading-[28px] text-[#000000] font-medium font-[ClashDisplay] text-center xl:text-left">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.”
            </p>
            <Image
              width={192}
              height={40}
              className="mt-[24px]"
              src="/img/Group-people.png"
              alt="Group-people"
            />
            <p className="mt-[24px] text-[18px] leading-[28px] font-semibold font-[ClashDisplay] text-[#000000]">
              Nick Jones
            </p>
          </div>
        </div>
        <Image
          width={48}
          height={48}
          className="absolute invisible xl:visible left-[-34px] bottom-0"
          src="/img/star-user.png"
          alt="star-user"
        />
      </div>

      {/* FAQ */}
      <div className="ms-[32px] me-[32px] xl:ms-[175px] xl:me-[175px] mt-[68px] mb-0 xl:mb-[64px] relative">
        <div className="w-full h-auto text-center xl:text-start xl:w-[497px] xl:h-[128px]">
          <p className="text-[18px] leading-[26px] font-[ClashDisplay] font-medium tracking-[0.6px] text-[#FF5555]">
            FAQ
          </p>
          <p className="text-[48px] leading-[48px] font-[ClashDisplay] font-bold text-[#000000]">
            Frequently Asked Questions
          </p>
        </div>
        <div className="mt-[40px] w-full h-auto xl:h-[583px]">
          {/* 1st point */}
          <div className="flex flex-col items-center mt-[32px] xl:mt-0  xl:flex-row xl:gap-x-5">
            <div className="bg-[#FF5555] px-[30px] py-[31px] w-full xl:w-1/2 h-auto rounded-xl">
              <p className="text-white text-[28px] font-[ClashDisplay] leading-[28px] font-bold">
                The Best Financial Accounting App Ever!
              </p>
              <p className="mt-[8px] opacity-50 max-w-[466px] text-[18px] font-[ClashDisplay] leading-[28px] text-white font-medium text-justify">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="bg-white px-[30px] py-[31px] w-full xl:w-1/2 h-auto">
              <p className="text-black text-[28px] font-[ClashDisplay] leading-[28px] font-bold">
                The Best Financial Accounting App Ever!
              </p>
              <p className="mt-[8px] opacity-50 max-w-[466px] text-[18px] leading-[28px] font-[ClashDisplay] text-black font-medium text-justify">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
          {/* 2nd point */}
          <div className="flex flex-col items-center mt-[32px] xl:mt-0 xl:flex-row xl:gap-x-5">
            <div className="bg-white px-[30px] py-[31px] w-full xl:w-1/2 h-auto">
              <p className="text-black text-[28px] font-[ClashDisplay] leading-[28px] font-bold">
                The Best Financial Accounting App Ever!
              </p>
              <p className="mt-[8px] opacity-50 max-w-[466px] text-[18px] font-[ClashDisplay] leading-[28px] text-black font-medium text-justify">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="bg-[#FF5555] px-[30px] py-[31px] w-full xl:w-1/2 h-auto rounded-xl">
              <p className="text-white font-[ClashDisplay] text-[28px] leading-[28px] font-bold">
                The Best Financial Accounting App Ever!
              </p>
              <p className="mt-[8px] opacity-50 max-w-[466px] font-[ClashDisplay] text-[18px] leading-[28px] text-white font-medium text-justify">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
          {/* 3rd point */}
          <div className="flex flex-col items-center mt-[32px] xl:mt-0 xl:flex-row xl:gap-x-5">
            <div className="bg-[#FF5555] px-[30px] py-[31px] w-full xl:w-1/2 h-auto rounded-xl">
              <p className="text-white  font-[ClashDisplay] text-[28px] leading-[28px] font-bold">
                The Best Financial Accounting App Ever!
              </p>
              <p className="mt-[8px] opacity-50 max-w-[466px] text-[18px] font-[ClashDisplay] leading-[28px] text-white font-medium text-justify">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="bg-white px-[30px]  py-[31px] w-full xl:w-1/2 h-auto">
              <p className="text-black text-[28px] font-[ClashDisplay] leading-[28px] font-bold">
                The Best Financial Accounting App Ever!
              </p>
              <p className="mt-[8px] opacity-50 max-w-[466px] text-[18px] font-[ClashDisplay] leading-[28px] text-black font-medium text-justify">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
        </div>
        <Image
          width={64}
          height={64}
          className="absolute invisible xl:visible top-[64px] right-[364px]"
          src="/img/star-faq.png"
          alt="star-faq"
        />
      </div>

      {/* frames */}
      <div className="mt-[155px] relative flex justify-center ms-[32px] me-[32px] xl:ms-[175px] xl:me-[175px]">
        <Image
          className="relative z-10"
          src="/img/Frame-mobiles.png"
          width={1090}
          height={508}
          alt="Frame-mobiles"
        />
        <Image
          width={527}
          height={437}
          className="absolute left-[-172px] top-[-189px]"
          src="/img/gradient-user.png"
          alt="gradient-frames"
        />
        <Image
          width={48}
          height={48}
          className="absolute invisible xl:visible left-[-67px] top-[123px]"
          src="/img/star-frame-1.png"
          alt="star-frame-1"
        />
        <Image
          width={64}
          height={64}
          className="absolute invisible xl:visible right-[-120px] top-[-75px]"
          src="/img/star-frame-2.png"
          alt="star-frame-1"
        />
      </div>

      {/* Footer */}
      <div className="mt-[155px] ms-[32px] me-[32px] xl:ms-[175px] xl:me-[175px]">
        <div className="flex flex-col items-center justify-center xl:flex-row">
          {/* Details */}
          <div className="w-full flex flex-col items-center mb-[42px] xl:mb-0 justify-center xl:block me-0 xl:w-1/6 xl:me-[52px] ">
            <Image
              width={106.18}
              height={34.41}
              src="/img/Group.png"
              alt="Group"
            />
            <div className="flex gap-x-3 mt-[15.59px]">
              <Image
                width={172}
                height={26}
                src="/img/email.png"
                alt="Frame-mail"
              />
            </div>
            <div className="flex gap-x-2 mt-[15.59px]">
              <Image
                width={173}
                height={26}
                src="/img/phone.png"
                alt="Frame-phone"
              />
            </div>
          </div>
          {/* Links */}
          <div className="w-full flex flex-col items-center mb-[42px] xl:mb-0 justify-center xl:block me-0 xl:w-1/6 xl:me-[52px]">
            <p className="text-[32px] font-[ClashDisplay]  leading-[42px] text-start font-medium text-[#000000]">
              Links
            </p>
            <p className="mt-[16px] font-[ClashDisplay] text-[16px] leading-[26px] font-medium text-[#000000]">
              Home
            </p>
            <p className="mt-[16px] font-[ClashDisplay] text-[16px] leading-[26px] font-medium text-[#000000]">
              About Us
            </p>
            <p className="mt-[16px] font-[ClashDisplay] text-[16px] leading-[26px] font-medium text-[#000000]">
              Bookings
            </p>
            <p className="mt-[16px] font-[ClashDisplay] text-[16px] leading-[26px] font-medium text-[#000000]">
              Blog
            </p>
          </div>
          {/* Legal */}
          <div className="w-full flex flex-col items-center mb-[42px] xl:mb-0 justify-center xl:block me-0 xl:w-1/6 xl:me-[52px] ">
            <p className="text-[#000000] font-[ClashDisplay] text-[32px] leading-[42px] font-medium">
              Legal
            </p>
            <p className="font-medium font-[ClashDisplay] text-[16px] leading-[26px] text-[#000000] mt-[16px]">
              TermsOfUse
            </p>
            <p className="font-medium font-[ClashDisplay] text-[16px] leading-[26px] text-[#000000] mt-[16px]">
              Privacy Policy
            </p>
            <p className="font-medium font-[ClashDisplay] text-[16px] leading-[26px] text-[#000000] mt-[16px]">
              Cookie Policy
            </p>
          </div>
          {/* Product */}
          <div className="w-full flex flex-col items-center mb-[42px] xl:mb-0 justify-center xl:block me-0 xl:w-1/6 xl:me-[52px]">
            <p className="font-medium font-[ClashDisplay] text-[32px] leading-[42px] text-[#000000]">
              Product
            </p>
            <p className="text-[16px] font-[ClashDisplay] mt-[16px] font-medium leading-[26px] text-[#000000]">
              Take-Tour
            </p>
            <p className="text-[16px] font-[ClashDisplay] mt-[16px] font-medium leading-[26px] text-[#000000]">
              Live Chat
            </p>
            <p className="text-[16px] font-[ClashDisplay] mt-[16px] font-medium leading-[26px] text-[#000000]">
              Reviews
            </p>
          </div>
          {/* News Letter */}
          <div className="w-full flex flex-col items-center xl:block xl:w-4/12 ms-[32px] shadow-2xl  shadow-white ">
            <p className="text-[32px] font-[ClashDisplay] leading-[42px] font-medium text-[#000000]">
              News Letter
            </p>
            <p className="text-[16px] font-[ClashDisplay] mt-[15px] text-start leading-[26px] text-[#000000] font-medium">
              Stay Up To Date
            </p>
            <div
              className=" h-auto flex mt-[15px] p-[10px]"
              style={{
                boxShadow: "-13.01px 13.01px 104.09px 0px #A1A1A11A",
              }}
            >
              <input
                type="email"
                className="p-2 placeholder:font-[ClashDisplay] placeholder:font-medium text-[16px] leading-[26px]"
                placeholder="Your email"
              />
              <button className="bg-black text-white font-medium font-[ClashDisplay] px-[40px] py-[16px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-[92px] ms-[32px] me-[32px] xl:ms-[175px] xl:me-[175px] border-t-1 border-t-slate-200 px-[39px] py-[39px]">
        <p className="text-[16px] text-center leading-[26px] font-medium font-[ClashDisplay] text-[#000000]">
          Copyright 2022 uifry.com all rights reserved
        </p>
      </div>
    </>
  );
};
export default Body;
