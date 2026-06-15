import { useState, useEffect, useReducer } from "react";
import HeaderSec from "../components/Header";
import FooterSec from "../components/Footer";

// ─── Constants ────────────────────────────────────────────────────────────────
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

const TIME_SLOTS = [
  { t: "17:30", n: "Golden Hour" },
  { t: "18:00", n: "Early Evening" },
  { t: "18:30", n: "Sunset" },
  { t: "19:00", n: "Twilight" },
  { t: "19:30", n: "Dusk" },
  { t: "20:00", n: "Evening" },
  { t: "20:30", n: "Soirée" },
  { t: "21:00", n: "Night" },
  { t: "21:30", n: "Late Night" },
  { t: "22:00", n: "Midnight Hour" },
];

const EXPERIENCES = [
  { id: "The Dining Room",  desc: "Our signature main hall" },
  { id: "Starlit Terrace",  desc: "Rooftop dining under the sky" },
  { id: "Chef's Table",     desc: "An intimate front-row seat" },
  { id: "Salon Privé",      desc: "Private luxury dining" },
  { id: "The Bar",          desc: "Cocktails and small plates" },
  { id: "VIP Suite",        desc: "The ultimate exclusivity" },
];

const TODAY = new Date(2026, 5, 5); // June 5 2026

// ─── Shared primitives ────────────────────────────────────────────────────────

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="w-12 h-px bg-[#735E35]" />
      <span className="w-1.5 h-1.5 rounded-full bg-[#735E35]" />
      <span className="w-12 h-px bg-[#735E35]" />
    </div>
  );
}

function PageHeader() {
  return (
    <div className="w-full flex flex-col items-center gap-5 text-center">
        
            <p className="text-[12px] leading-4 font-normal uppercase text-[#C09D59] tracking-[4.8px]  font-inter">
                Reservations
            </p>

            <h1 className="text-[40px] lg:text-[60px] font-thin leading-18 text-[#F8F6F1]  font-cormorant">
                Reserve Your <span className="italic">Evening</span>
            </h1>

            {/* Decorator */}
            <div className="flex items-center justify-center gap-3.75">
                <div className="w-11.75 h-px bg-linear-to-r from-[#0A0A0A] to-[#735E35]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#735E35]" />
                <div className="w-11.75 h-px bg-linear-to-l from-[#0A0A0A] to-[#735E35]" />
            </div>

            <p className="text-[16px] leading-7 font-normal  text-[#988c81]  font-inter max-w-125">Every detail is curated for your pleasure. Select your preferred date, time, and experience.</p>


    </div>
  );
}




function Stepper({ step }) {
  const StepCircle = ({ num, state }) => {
    const base = "w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium tracking-wider border border-[rgba(192,157,89,0.18)] text-[#5A5040] transition-all duration-300";
    const active = "!bg-[#C09D59] !border-[#C09D59] !text-[#0D0D0D]";
    const done = "!border-[#C09D59] !text-[#C09D59]";
    return (
      <div className={`${base} ${state === "active" ? active : ""} ${state === "done" ? done : ""}`}>
        {state === "done" ? "✓" : num}
      </div>
    );
  };

  const Line = ({ filled }) => (
    <div className={`w-20 h-px mx-2 transition-all duration-300 ${filled ? "bg-[#8A6E3A]" : "bg-[rgba(192,157,89,0.18)]"}`} />
  );

  return (
    <div className="flex items-center justify-center gap-0 py-8">
      <StepCircle num="1" state={step > 1 ? "done" : step === 1 ? "active" : "inactive"} />
      <Line filled={step > 1} />
      <StepCircle num="2" state={step > 2 ? "done" : step === 2 ? "active" : "inactive"} />
      <Line filled={step > 2} />
      <StepCircle num="3" state={step === 3 ? "active" : step > 3 ? "done" : "inactive"} />
    </div>
  );
}

function SectionTitle({ children, small }) {
  return (
    <h2 className={`font-cormorant font-light text-[#F5F0E8] text-center px-6 pb-8 ${small ? "text-[24px]" : "text-[24px]"}`}>
      {children}
    </h2>
  );
}

function ContinueBtn({ onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-[#252018] border border-[#8A6E3A] text-[#C09D59] font-['Montserrat',sans-serif] text-[10px] font-medium tracking-[0.25em] uppercase px-8 py-4 flex items-center gap-2.5 transition-all duration-200 hover:bg-[#C09D59] hover:text-[#0D0D0D] hover:border-[#C09D59] disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
    >
      {children}
    </button>
  );
}

function BackBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-[#8A8070] font-['Montserrat',sans-serif] text-[10px] font-medium tracking-[0.2em] uppercase py-4 transition-colors duration-200 hover:text-[#F5F0E8] cursor-pointer bg-transparent border-none"
    >
      Back
    </button>
  );
}

// ─── Step 1: Date / Time / Guests ─────────────────────────────────────────────

function Calendar({ year, month, selectedDate, onSelectDate, onPrevMonth, onNextMonth }) {
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const prevLast = new Date(year, month, 0).getDate();
  const remainder = 42 - (firstDay + lastDate);

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push({ label: prevLast - firstDay + 1 + i, type: "other" });
  }
  for (let d = 1; d <= lastDate; d++) {
    const isPast = new Date(year, month, d) < TODAY;
    const isToday =
      year === TODAY.getFullYear() && month === TODAY.getMonth() && d === TODAY.getDate();
    const isSel =
      selectedDate && selectedDate.y === year && selectedDate.m === month && selectedDate.d === d;
    days.push({ label: d, type: "current", isPast, isToday, isSel, d });
  }
  for (let i = 1; i <= remainder; i++) {
    days.push({ label: i, type: "other" });
  }

  return (
    <div>
      {/* Nav */}
      <div className="flex items-center justify-between px-5 py-4 bg-[#161413] border border-[rgba(192,157,89,0.18)] border-b-0 rounded-t-sm">
        <button
          onClick={onPrevMonth}
          className="w-7 h-7 flex items-center justify-center border border-[rgba(192,157,89,0.18)] text-[#8A8070] text-sm rounded-sm transition-all duration-200 hover:border-[#C09D59] hover:text-[#C09D59] cursor-pointer bg-transparent"
        >
          ‹
        </button>
        <span className="text-[13px] font-medium tracking-widest text-[#F5F0E8]">
          {MONTHS[month]} {year}
        </span>
        <button
          onClick={onNextMonth}
          className="w-7 h-7 flex items-center justify-center border border-[rgba(192,157,89,0.18)] text-[#8A8070] text-sm rounded-sm transition-all duration-200 hover:border-[#C09D59] hover:text-[#C09D59] cursor-pointer bg-transparent"
        >
          ›
        </button>
      </div>

      {/* Grid */}
      <div className="bg-[#1E1A15] border border-[rgba(192,157,89,0.18)] border-t-0 rounded-b-sm px-3 pb-0">
        {/* Day labels */}
        <div className="grid grid-cols-7 py-3">
          {["Su","Mo","Tu","We","Th","Fr","Sa"].map((d) => (
            <div key={d} className="text-center text-[12px] font-medium tracking-widest text-[#988C81] uppercase">
              {d}
            </div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-0.5">
          {days.map((day, i) => {
            if (day.type === "other") {
              return (
                <div key={i} className="aspect-square flex items-center justify-center text-[12px] font-light text-[#5A5040]" />
              );
            }
            const base = "aspect-square flex items-center justify-center text-[12px] font-light rounded-sm border border-transparent transition-all duration-150 cursor-pointer";
            let cls = "text-[purple]";
            if (day.isPast) cls = "text-[#5A5040] opacity-40 pointer-events-none";
            else if (day.isSel) cls = "bg-[#C09D59] text-[#0D0D0D] font-medium border-[#C09D59]";
            else if (day.isToday) cls = "text-[#C09D59] bg-inherit border-solid border";
            else cls = "text-[#F8F6F1] hover:border-[rgba(192,157,89,0.4)] hover:text-[#F5F0E8]";

            return (
              <div
                key={i}
                className={`${base} ${cls}`}
                onClick={() => !day.isPast && onSelectDate(day.d)}
              >
                {day.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Step1({ state, dispatch, onNext }) {
  const canContinue = state.selectedDate && state.selectedTime;

  function handlePrevMonth() {
    dispatch({ type: "PREV_MONTH" });
  }
  function handleNextMonth() {
    dispatch({ type: "NEXT_MONTH" });
  }
  function handleSelectDate(d) {
    dispatch({ type: "SELECT_DATE", payload: { y: state.year, m: state.month, d } });
  }
  function handleSelectTime(t, n) {
    dispatch({ type: "SELECT_TIME", payload: { t, n } });
  }
  function handleSelectGuests(g) {
    dispatch({ type: "SELECT_GUESTS", payload: g });
  }

  return (
    <div className="animate-[fadeIn_0.4s_ease]">
      <PageHeader />
      <Stepper step={1} />
      <SectionTitle>When shall we expect you?</SectionTitle>

      {/* Two-column body */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 px-10 max-w-215 mx-auto">
        {/* Calendar */}
        <div className="pr-0 md:pr-8 md:border-r border-[rgba(192,157,89,0.18)]">
          <Calendar
            year={state.year}
            month={state.month}
            selectedDate={state.selectedDate}
            onSelectDate={handleSelectDate}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
          />
        </div>

        {/* Time + Guests */}
        <div className="pt-6 md:pt-0 md:pl-8">
          <p className="text-[12px] font-normal tracking-[2.4px] text-[#988C81] uppercase mb-5">
            Select Time
          </p>
          <div className="grid grid-cols-2 gap-2">
            {TIME_SLOTS.map(({ t, n }) => {
              const isSelected = state.selectedTime === t;
              return (
                <div
                  key={t}
                  onClick={() => handleSelectTime(t, n)}
                  className={`bg-inherit border px-3.5 py-3 rounded-sm cursor-pointer transition-all duration-150 ${
                    isSelected
                      ? "border-[#C09D59]"
                      : "border-[#322e2a4d] hover:border-[rgba(192,157,89,0.4)]"
                  }`}
                >
                  <div className="text-[14px] font-medium text-[#988c81] mb-1">{t}</div>
                  <div className="text-[10px] font-normal tracking-[1.5px] text-[#c09d5999] uppercase">{n}</div>
                </div>
              );
            })}
          </div>

          {/* Guests */}
          <div className="mt-6">
            <p className="text-[12px] font-nromal tracking-[2.4px] text-[#988C81] uppercase mb-2.5 flex items-center gap-2">
              Guests
            </p>
            <div className="flex gap-1.5 flex-wrap">
              {[1,2,3,4,5,6,7].map((g) => {
                const isSel = Number(state.selectedGuests) === g;
                return (
                  <button
                    key={g}
                    onClick={() => handleSelectGuests(g)}
                    className={`w-10 h-10 text-[13px] font-normal transition-all duration-150 cursor-pointer font-['Montserrat',sans-serif] ${
                      isSel
                        ? "bg-[#C09D59] text-[#0A0A0A] font-normal"
                        : "bg-[#2C2826] text-[#988C81] hover:text-[#F5F0E8]"
                    }`}
                  >
                    {g}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end px-10 pt-8 pb-10 max-w-215 mx-auto">
        <ContinueBtn onClick={onNext} disabled={!canContinue}>
          Continue →
        </ContinueBtn>
      </div>
    </div>
  );
}

// ─── Step 2: Experience ────────────────────────────────────────────────────────

function Step2({ state, dispatch, onNext, onBack }) {
  function handleSelect(id) {
    dispatch({ type: "SELECT_EXP", payload: id });
  }

  return (
    <div className="animate-[fadeIn_0.4s_ease]">
      <PageHeader />
      <Stepper step={2} />
      <SectionTitle>Choose your experience</SectionTitle>

      <div className="px-10 max-w-215 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {EXPERIENCES.map(({ id, desc }) => {
            const isSel = state.selectedExp === id;
            return (
              <div
                key={id}
                onClick={() => handleSelect(id)}
                className={`relative bg-[#0A0A0A] border rounded-sm p-6 cursor-pointer transition-all duration-150 ${
                  isSel
                    ? "border-[#c09d59] bg-[#c09d590d]"
                    : "border-[#322e2a4d] hover:border-[rgba(192,157,89,0.4)]"
                }`}
              >
                <span
                  className={`absolute top-5 right-5 text-[#C09D59] text-base transition-opacity duration-200 ${
                    isSel ? "opacity-100" : "opacity-0"
                  }`}
                >
                  ✦
                </span>
                <div className="font-cormorant text-[18px] font-nromal leading-7 text-[#F8F6F1] mb-1.5">
                  {id}
                </div>
                <div className="text-[12px] font-nromal text-[#988C81]">{desc}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-center px-10 py-8 max-w-215 mx-auto">
        <BackBtn onClick={onBack} />
        <ContinueBtn onClick={onNext} disabled={!state.selectedExp}>
          Continue →
        </ContinueBtn>
      </div>
    </div>
  );
}

// ─── Step 3: Details + Summary ────────────────────────────────────────────────

function Step3({ state, dispatch, onNext, onBack }) {
  const sd = state.selectedDate;
  const dateStr = sd ? `${MONTHS[sd.m]} ${sd.d}, ${sd.y}` : "—";

  function handleField(field, val) {
    dispatch({ type: "SET_FIELD", payload: { field, val } });
  }

  return (
    <div className="animate-[fadeIn_0.4s_ease]">
      <PageHeader />
      <Stepper step={3} />
      <SectionTitle small>Your details</SectionTitle>

      <div className="px-10 pb-8 max-w-135 mx-auto">
        {[
          { label: "Full Name", id: "name", type: "text",  placeholder: "Your name" },
          { label: "Email",     id: "email",type: "email", placeholder: "your@email.com" },
          { label: "Phone",     id: "phone",type: "tel",   placeholder: "+1 (212) 555-0000" },
        ].map(({ label, id, type, placeholder }) => (
          <div key={id} className="mb-5">
            <label className="block text-[10px] font-medium tracking-[0.25em] text-[#8A8070] uppercase mb-2">
              {label}
            </label>
            <input
              type={type}
              placeholder={placeholder}
              value={state.fields[id] || ""}
              onChange={(e) => handleField(id, e.target.value)}
              className="w-full bg-[#1E1A15] border border-[rgba(192,157,89,0.18)] text-[#F5F0E8] font-['Montserrat',sans-serif] text-[14px] font-light px-4 py-3.5 outline-none rounded-sm placeholder-[#5A5040] transition-colors duration-150 focus:border-[#C09D59]"
            />
          </div>
        ))}

        <div className="mb-5">
          <label className="block text-[10px] font-medium tracking-[0.25em] text-[#8A8070] uppercase mb-2">
            Special Requests
          </label>
          <textarea
            placeholder="Allergies, celebrations, preferences..."
            value={state.fields.requests || ""}
            onChange={(e) => handleField("requests", e.target.value)}
            className="w-full bg-[#1E1A15] border border-[rgba(192,157,89,0.18)] text-[#F5F0E8] font-['Montserrat',sans-serif] text-[14px] font-light px-4 py-3.5 outline-none rounded-sm placeholder-[#5A5040] transition-colors duration-150 focus:border-[#C09D59] resize-y min-h-20 leading-relaxed"
          />
        </div>

        {/* Summary */}
        <div className="bg-[#1E1A15] border border-[rgba(192,157,89,0.18)] px-6 py-5 mt-6 rounded-sm">
          <p className="text-[10px] font-medium tracking-[0.25em] text-[#C09D59] uppercase mb-4">
            Reservation Summary
          </p>
          {[
            { key: "Date",       val: dateStr },
            { key: "Time",       val: state.selectedTime || "—" },
            { key: "Guests",     val: state.selectedGuests || "—" },
            { key: "Experience", val: state.selectedExp || "—" },
          ].map(({ key, val }) => (
            <div key={key} className="flex justify-between items-baseline mb-2.5 text-[13px]">
              <span className="text-[#8A8070] font-light">{key}:</span>
              <span className="text-[#F5F0E8] font-normal">{val}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center px-10 py-6 max-w-165 mx-auto">
        <BackBtn onClick={onBack} />
        <ContinueBtn onClick={onNext}>Confirm Reservation →</ContinueBtn>
      </div>
    </div>
  );
}

// ─── Step 4: Confirmation ─────────────────────────────────────────────────────

function Step4({ state }) {
  const sd = state.selectedDate;
  const dateStr = sd ? `${MONTHS[sd.m]} ${sd.d}, ${sd.y}` : "";
  const name = state.fields?.name || "Guest";

  return (
    <div className="animate-[fadeIn_0.4s_ease]">
      <div className="text-center px-6 py-16">
        <div className="h-18 rounded-full bg-[#1E1A15] border border-[#8A6E3A] flex items-center justify-center mx-auto mb-7 text-[#C09D59] text-3xl w-18">
          ✓
        </div>
        <h2 className="font-cormorant text-[40px] font-light text-[#F5F0E8] mb-4">
          Reservation Confirmed
        </h2>
        <GoldDivider />
        <p className="text-[14px] font-light text-[#8A8070] leading-relaxed max-w-120 mx-auto mb-5">
          We look forward to welcoming you, {name}. A confirmation has been sent to your email.
        </p>
        <div className="font-cormorant text-xl font-light text-[#C09D59]">
          {dateStr} at {state.selectedTime}
        </div>
      </div>
    </div>
  );
}

// ─── Reducer ──────────────────────────────────────────────────────────────────

const initialState = {
  year: 2026,
  month: 5,
  selectedDate: null,
  selectedTime: null,
  selectedTimeName: null,
  selectedGuests: 2,
  selectedExp: null,
  fields: { name: "", email: "", phone: "", requests: "" },
};

function reducer(state, action) {
  switch (action.type) {
    case "PREV_MONTH": {
      let { month, year } = state;
      month--;
      if (month < 0) { month = 11; year--; }
      return { ...state, month, year };
    }
    case "NEXT_MONTH": {
      let { month, year } = state;
      month++;
      if (month > 11) { month = 0; year++; }
      return { ...state, month, year };
    }
    case "SELECT_DATE":
      return { ...state, selectedDate: action.payload };
    case "SELECT_TIME":
      return { ...state, selectedTime: action.payload.t, selectedTimeName: action.payload.n };
    case "SELECT_GUESTS":
      return { ...state, selectedGuests: action.payload };
    case "SELECT_EXP":
      return { ...state, selectedExp: action.payload };
    case "SET_FIELD":
      return { ...state, fields: { ...state.fields, [action.payload.field]: action.payload.val } };
    default:
      return state;
  }
}

// ─── Root Component ───────────────────────────────────────────────────────────

export default function ReservationFlow() {
  const [step, setStep] = useState(1);
  const [resState, dispatchAction] = useReducer(reducer, initialState);

  useEffect(() => {
    window.scrollTo && window.scrollTo(0, 0);
  }, [step]);

  return (
  <>

    <HeaderSec/>
    <div className="h-full w-full flex flex-col  bg-[#0A0A0A] text-[#F5F0E8] font-light py-45">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@300;400;500&display=swap');
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {step === 1 && (
        <Step1 state={resState} dispatch={dispatchAction} onNext={() => setStep(2)} />
      )}
      {step === 2 && (
        <Step2 state={resState} dispatch={dispatchAction} onNext={() => setStep(3)} onBack={() => setStep(1)} />
      )}
      {step === 3 && (
        <Step3 state={resState} dispatch={dispatchAction} onNext={() => setStep(4)} onBack={() => setStep(2)} />
      )}
      {step === 4 && (
        <Step4 state={resState} />
      )}
    </div>
    <FooterSec/>

  </>
  );
}