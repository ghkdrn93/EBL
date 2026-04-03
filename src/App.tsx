/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  GraduationCap, 
  Users, 
  CheckCircle2, 
  ChevronRight, 
  Phone, 
  MapPin, 
  MessageCircle,
  Star,
  Gamepad2,
  Coffee,
  Globe,
  ShieldCheck,
  Heart
} from 'lucide-react';
import { motion } from 'motion/react';

const EBL = () => (
  <span className="inline-flex">
    <span className="text-[#E53E3E]">E</span>
    <span className="text-[#3182CE]">B</span>
    <span className="text-[#38A169]">L</span>
  </span>
);

const Navbar = () => (
  <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-bottom border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <a href="#" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <img 
            src="https://i.ibb.co/WWRqj8nq/LOGO.png" 
            alt="EduBridge Learning Logo" 
            className="h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-gray-900 tracking-tight">EduBridge Learning</span>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-indigo-600 transition-colors">홈</a>
          <a href="#programs" className="hover:text-indigo-600 transition-colors">교육과정</a>
          <a href="#features" className="hover:text-indigo-600 transition-colors">특장점</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">상담문의</a>
        </div>
        <a href="#contact" className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100 flex items-center gap-2">
          <Phone className="w-4 h-4" />
          상담신청
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(79,70,229,0.05)_0%,transparent_100%)]" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold mb-6">
            미국식 환경 영어 몰입 교육
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight mb-6">
            영어가 <span className="text-indigo-600">생활</span>이 되는<br />
            특별한 공간, <EBL />
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
            단순한 암기가 아닌 놀이와 생활 속에서 자연스럽게 습득하는 미국식 몰입 교육. 
            영유아부터 초등부까지 최적의 영어 환경을 제공합니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#programs" className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center gap-2 group">
              교육과정 자세히보기
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                  <img src={`https://picsum.photos/seed/student${i}/100/100`} alt="student" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <p className="font-bold text-gray-900">500+ 학부모님들의 선택</p>
              <p className="text-gray-500">만족도 98%의 검증된 교육 시스템</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl rotate-3 bg-indigo-100">
            <img 
              src="https://i.ibb.co/QFyNpzX3/Chat-GPT-Image-2026-4-1-07-04-51.png" 
              alt="EduBridge Learning Activity" 
              className="w-full h-full object-cover object-[30%_center]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 -rotate-3 max-w-[240px]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <span className="font-bold text-gray-900">연장 돌봄 서비스</span>
            </div>
            <p className="text-xs text-gray-500 leading-normal">
              바쁜 학부모님들을 위해 밤 10시까지 안전하게 케어합니다.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ProgramCard = ({ title, age, description, icon: Icon, color, features }: any) => (
  <div className="group p-8 rounded-[32px] bg-white border border-gray-100 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-50 transition-all duration-500 flex flex-col h-full">
    <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      <Icon className="w-7 h-7 text-white" />
    </div>
    <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2 block">{age}</span>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-6">{description}</p>
    {features && (
      <ul className="mt-auto space-y-2">
        {features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            {feature}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Programs = () => (
  <section id="programs" className="py-24 bg-gray-50/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">프로그램 안내</h2>
          <p className="text-gray-600">연령별 맞춤 영어 교육 프로그램</p>
        </div>
        <div className="flex items-center gap-2 text-sm font-bold text-indigo-600 bg-white px-4 py-2 rounded-full shadow-sm border border-indigo-50">
          <Star className="w-4 h-4 fill-indigo-600" />
          소수정예 · 밀착 케어
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <ProgramCard 
          title="영유아반 (0~5세)"
          age="영어돌봄"
          description="처음 영어를 접하는 아이들을 위한 자연스러운 영어 노출 프로그램"
          features={["영어 동요 & 율동", "영어 그림책 읽기", "놀이 기반 영어 습득", "생활영어 자연 노출"]}
          icon={Gamepad2}
          color="bg-pink-500"
        />
        <ProgramCard 
          title="유치부 (6~7세)"
          age="영어돌봄 · 테마몰입영어"
          description="초등 영어 준비를 위한 체계적인 영어 기초 프로그램"
          features={["파닉스 & Reading 기초", "역할놀이 영어", "미국 유치원 교재", "스피킹 자신감 UP"]}
          icon={Users}
          color="bg-indigo-500"
        />
        <ProgramCard 
          title="초등부"
          age="미국식 환경 교육 · 테마몰입영어"
          description="미국 현지 학교 커리큘럼 기반의 심화 영어 몰입 프로그램"
          features={["미국교과서 기반 수업", "영어 ONLY 환경", "Reading & Writing 심화", "영어로 사고하기"]}
          icon={GraduationCap}
          color="bg-emerald-500"
        />
      </div>
    </div>
  </section>
);

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3">
    <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
      <CheckCircle2 className="w-4 h-4 text-indigo-600" />
    </div>
    <span className="text-gray-700 font-medium">{text}</span>
  </div>
);

const Features = () => (
  <section id="features" className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight"><EBL />만의 차별점</h2>
        <p className="text-gray-600">왜 <EBL />을 선택해야 할까요?</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
            <Globe className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">영어 ONLY 환경</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            수업 시간부터 쉬는 시간까지, 학원 내에서는 100% 영어만 사용합니다. 자연스러운 영어 몰입 환경을 제공합니다.
          </p>
        </div>
        
        <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-6">
            <BookOpen className="w-6 h-6 text-amber-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">미국교과서 기반</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            미국 현지 학교에서 사용하는 교과서를 활용하여 원어민과 동일한 수준의 학습 경험을 제공합니다.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
            <MessageCircle className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">역할놀이 & 실생활 영어</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            마트, 병원, 레스토랑 등 다양한 상황을 역할놀이로 체험하며 실제 생활에서 바로 쓸 수 있는 영어를 익힙니다.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">소수정예 밀착 케어</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            반별 소수 정원제로 운영하여 각 아이에게 충분한 관심과 맞춤 지도를 제공합니다.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
            <Clock className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">22시까지 연장 돌봄</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            맞벌이 가정을 위해 저녁 10시까지 연장 돌봄 서비스를 운영합니다. 안전하고 편안한 환경에서 영어와 함께합니다.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all">
          <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center mb-6">
            <Heart className="w-6 h-6 text-pink-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">정서적 안정 우선</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            영어 교육과 함께 아이들의 정서적 안정과 사회성 발달을 최우선으로 생각합니다.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Tuition = () => (
  <section id="tuition" className="py-24 bg-gray-50/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
          <EBL /> 에듀브릿지 어학원 <span className="text-gray-400 font-medium text-2xl ml-2">(Tuition & Fees)</span>
        </h2>
        <p className="text-gray-600">합리적인 수강료로 최상의 교육 환경을 제공합니다.</p>
      </div>

      <div className="bg-white rounded-[40px] shadow-xl shadow-indigo-100/50 border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="px-8 py-6 font-bold text-lg">구분</th>
                <th className="px-8 py-6 font-bold text-lg text-center">2회</th>
                <th className="px-8 py-6 font-bold text-lg text-center">3회</th>
                <th className="px-8 py-6 font-bold text-lg text-center">4회</th>
                <th className="px-8 py-6 font-bold text-lg text-center">5회</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-indigo-50/30 transition-colors">
                <td className="px-8 py-6 font-bold text-gray-900 text-lg">유아</td>
                <td className="px-8 py-6 text-center text-gray-600 font-medium">240,000</td>
                <td className="px-8 py-6 text-center text-gray-600 font-medium">360,000</td>
                <td className="px-8 py-6 text-center text-gray-600 font-medium">480,000</td>
                <td className="px-8 py-6 text-center text-gray-600 font-medium">600,000</td>
              </tr>
              <tr className="hover:bg-indigo-50/30 transition-colors">
                <td className="px-8 py-6 font-bold text-gray-900 text-lg">유치부</td>
                <td className="px-8 py-6 text-center text-gray-600 font-medium">240,000</td>
                <td className="px-8 py-6 text-center text-gray-600 font-medium">360,000</td>
                <td className="px-8 py-6 text-center text-gray-600 font-medium">480,000</td>
                <td className="px-8 py-6 text-center text-gray-600 font-medium">600,000</td>
              </tr>
              <tr className="hover:bg-indigo-50/30 transition-colors bg-indigo-50/10">
                <td className="px-8 py-6 font-bold text-gray-900 text-lg">초등부</td>
                <td className="px-8 py-6 text-center text-gray-900 font-medium">250,000</td>
                <td className="px-8 py-6 text-center text-gray-900 font-medium">370,000</td>
                <td className="px-8 py-6 text-center text-gray-900 font-medium">500,000</td>
                <td className="px-8 py-6 text-center text-gray-900 font-medium">630,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-8 bg-amber-50 border-t border-amber-100">
          <p className="text-amber-700 font-bold flex items-center gap-2">
            <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
            고학년은 관리형 독서실 및 스터디 무료 제공 선착순 마감!
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xnjopprl", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-indigo-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[48px] p-8 lg:p-16 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">입학 상담 및 문의</h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                아이의 첫 영어 시작, <EBL />이 함께하겠습니다. 
                궁금하신 점은 언제든 편하게 문의주세요.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Phone</p>
                    <p className="text-xl font-bold text-gray-900">1800-7130</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Address</p>
                    <p className="text-lg font-bold text-gray-900">경기도 화성시 동탄구 동탄순환대로 20, 2~3층</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">KakaoTalk</p>
                    <p className="text-lg font-bold text-gray-900">@EBL_Academy</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-3xl p-8 relative overflow-hidden">
              <form 
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">학부모 성함</label>
                    <input 
                      type="text" 
                      name="parent_name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none transition-all" 
                      placeholder="성함을 입력하세요" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">연락처</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none transition-all" 
                      placeholder="010-0000-0000" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">자녀 연령</label>
                  <select 
                    name="child_age"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none transition-all appearance-none bg-white"
                  >
                    <option value="infant">영유아 (0~5세)</option>
                    <option value="kinder">유치부 (6~7세)</option>
                    <option value="elementary">초등부</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">문의 내용</label>
                  <textarea 
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none transition-all h-32" 
                    placeholder="상담받고 싶은 내용을 적어주세요"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      전송 중...
                    </>
                  ) : '상담 신청하기'}
                </button>
              </form>

              {/* Success Modal Overlay */}
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center p-8 text-center z-20"
                >
                  <motion.div 
                    initial={{ scale: 0.5, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="w-20 h-20 bg-emerald-100 rounded-3xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-100"
                  >
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </motion.div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">상담 신청 완료!</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    소중한 문의 감사합니다.<br />
                    확인 후 빠른 시일 내에 연락드리겠습니다.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-10 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                  >
                    확인
                  </button>
                </motion.div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-xl text-sm text-red-600 font-medium text-center">
                  오류가 발생했습니다. 잠시 후 다시 시도해주세요.
                  <button onClick={() => setStatus('idle')} className="ml-2 underline">다시 시도</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-50 py-12 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Logo and Name */}
        <div className="flex items-center gap-4 min-w-fit">
          <img 
            src="https://i.ibb.co/WWRqj8nq/LOGO.png" 
            alt="EduBridge Learning Logo" 
            className="h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <span className="text-xl font-bold text-gray-800 tracking-tight">EduBridge Learning</span>
        </div>

        {/* Vertical Divider (Hidden on mobile) */}
        <div className="hidden md:block w-px h-16 bg-gray-300 mx-4" />

        {/* Business Information */}
        <div className="flex-1 text-xs sm:text-sm text-gray-500 leading-relaxed space-y-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-bold text-gray-700">EduBridge Learning</span>
            <span className="text-gray-300">|</span>
            <span>주소 : 경기도 화성시 동탄구 동탄순환대로 20, 2~3층</span>
            <span className="text-gray-300">|</span>
            <span>전화번호 : 1800-7130</span>
            <span className="text-gray-300">|</span>
            <span>팩스번호 : 070-7507-8709</span>
            <span className="text-gray-300">|</span>
            <span>사업자등록번호 : 217-11-68827</span>
          </div>
          <div className="pt-2">
            <p>Copyright © EduBridge Learning All Right Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Features />
        <Tuition />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
