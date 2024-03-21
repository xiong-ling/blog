"use client";

import { RadioGroup } from "@/components/radioGroup";
import { useMemo, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import {
  MdPhonelinkRing,
  MdEmail,
  MdLocationCity,
  MdOutlineSchool,
} from "react-icons/md";

const options = [
  {
    label: "BaseInfo",
    value: "baseInfo",
  },
  {
    label: "Companys",
    value: "companys",
  },
];

const BaseInfo = () => {
  return (
    <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl h-[360px] w-[520px] p-6">
      <div className="flex h-[32px] items-center">
        <FaRegUser />
        <span className="ml-4">Ling Xiong</span>
      </div>
      <div className="grid grid-cols-2">
        {[
          { icon: <MdPhonelinkRing />, value: "130-1808-7106" },
          { icon: <MdEmail />, value: "1796022504@qq.com" },
          { icon: <MdLocationCity />, value: "Wuhan, China" },
          { icon: <MdOutlineSchool />, value: "武汉纺织大学(2017-2021)" },
        ].map((it, index) => (
          <div key={index} className="flex h-[32px] items-center">
            {it?.icon}
            <span className="ml-4">{it.value}</span>
          </div>
        ))}
      </div>
      <div className="flex h-[32px] items-center">
        Bachelor of Science: Software Engineering & Finance
      </div>
      <div className="flex h-[32px] items-center">Skills</div>
      <div className="flex flex-wrap gap-2">
        <div className={`p-1 text-[12px] rounded text-[#9162c0] bg-[#9162c025]`}>
          React
        </div>
        <div className={`p-1 text-[12px] rounded text-[#449d5d] bg-[#449d5d25]`}>
          Next.js
        </div>
        <div className={`p-1 text-[12px] rounded text-[#d17724] bg-[#d1772425]`}>
          JavaScript
        </div>
        <div className={`p-1 text-[12px] rounded text-[#3b88e9] bg-[#3b88e925]`}>
          TypeScript
        </div>
        <div className={`p-1 text-[12px] rounded text-[#9162c0] bg-[#9162c025]`}>
          React-Router
        </div>
        <div className={`p-1 text-[12px] rounded text-[#449d5d] bg-[#449d5d25]`}>
          Redux
        </div>
        <div className={`p-1 text-[12px] rounded text-[#d17724] bg-[#d1772425]`}>
          zustand
        </div>
        <div className={`p-1 text-[12px] rounded text-[#3b88e9] bg-[#3b88e925]`}>
          tailwindcss
        </div>
        <div className={`p-1 text-[12px] rounded text-[#9162c0] bg-[#9162c025]`}>
          Antd Design
        </div>
        <div className={`p-1 text-[12px] rounded text-[#449d5d] bg-[#449d5d25]`}>
          shadcn/ui
        </div>
      </div>
    </div>
  );
};

const Companys = () => {
  const companys = [
    {
      date: '2023.07 - 2023.11',
      companyName: '武汉万云网络科技有限公司',
      positions: '前端开发工程师',
      city: '武汉',
      bgColor: 'rgb(251, 146, 60, 1)',
      responsibilities: ['负责低代码平台中登录、权限和组织架构相关的业务开发', '负责低代码平台中页面编辑器、表格、甘特图等部分组件的开发']
    },
    {
      date: '2022.06 - 2023.05',
      companyName: '北京蒸汽记忆科技有限公司',
      positions: '前端开发工程师',
      city: '武汉',
      bgColor: 'rgb(56, 189, 248, 1)',
      responsibilities: ['负责公司安全管理、权限管理和登录组件相关功能开发', '沉淀团队公共组件，帮助实习生解决遇到的问题']
    },
    {
      date: '2021.05 - 2022.05',
      companyName: '神策网络科技（北京）有限公司',
      positions: '前端开发工程师',
      city: '武汉',
      bgColor: 'rgb(52, 211, 153, 1)',
      responsibilities: ['负责开发并维护用户群画像、用户数据视图的图表可视化需求，实现用户搜索模块功能', '实现 cli 脚手架工具工具；参与日常前端值班']
    }
  ];

  return <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl w-[600px] p-6">
    {
      companys.map(({ date, city, companyName, positions, bgColor, responsibilities }, index) => (
        <div className="flex" key={index}>
          <div className="text-primary w-[150px] text-sm">{date}</div>
          <div className="m-2 flex flex-col justify-start items-center">
            <div className="w-[8px] h-[8px] rounded-[50%] mb-2" style={{ backgroundColor: bgColor }}></div>
            <div className="w-[1px] h-[150px] bg-slate-300"></div>
          </div>
          <div className="flex-1">
            <h1 className="font-medium mb-2">{companyName}</h1>
            <div className="mb-2 flex item-center justify-between text-[12px] text-slate-400"> 
              <div>{positions}</div>
              <div>{city}</div>
            </div>
            <div>
              {
                responsibilities.map((item, index) => (
                  <div className="text-sm flex" key={index}>
                    <div className="flex items-center justify-center h-[20px]">
                      <span className="flex w-[6px] h-[6px] rounded-[50%] bg-slate-600 mr-1"></span>
                    </div>
                    <span className="flex flex-1">{item}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      ))
    }
  </div>
}

const Self = () => {
  const [tab, setTab] = useState("baseInfo");

  const render = useMemo(() => {
    if (tab === "baseInfo") return <BaseInfo />;
    if (tab === "companys") return <Companys />;
    return null;
  }, [tab]);

  return (
    <main className="flex-1">
      <div className="container relative p-10">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight mb-10">
          About me
        </h1>
        <div className="flex m-20 justify-center flex-col items-center">
          <RadioGroup option={options} value={tab} onChange={setTab} />
          <div className="mt-4">{render}</div>
        </div>
      </div>
    </main>
  );
};

export default Self;
