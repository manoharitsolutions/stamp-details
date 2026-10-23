const ids=["article","amount","description","firstParty","secondParty","paidBy"];
const REGISTERABLE_ARTICLES = [
"Adoption - Deed [3]",
"Agreement - Construction / Development / Sale / Transfer (Imm. Property) [5(g-a)]",
"Agreement to Sale [5(h)]",
"Cancellation [16]",
"Cancellation for Immovable - Property [16]",
"Certificate of Sale [17]",
"Conveyance - Immovable Property [20(a)]",
"Conveyance - Property of Co-Op Soc. [20(b)]",
"Conveyance - Property of N.T.C., G.H.B., G.O.F.A. [20(c)]",
"Conveyance Amalgamation, Merger, Demerger, Arrangement, Reconstruction Order by NCLT, RBI, BIFR, IBC etc. [20(d)(i)]",
"Deposit of Title Deeds - Loan/Debt Exceeds Rs. 10 Cr. [6(1)(a)(iii)]",
"Deposit of Title Deeds - Loan/Debt Not Exceed Rs. 1 Cr. [6(1)(a)(i)]",
"Deposit of Title Deeds - Loan/Debt from Rs. 1 Cr. To Rs. 10 Cr. [6(1)(a)(ii)]",
"Exchange of Property [26]",
"Further Charge - With Possession [27(a)]",
"Further Charge - Without Possession Exceeds Rs. 10 Cr. [27(b)(iii)]",
"Further Charge - Without Possession Not Exceed Rs. 1 Cr. [27(b)(i)]",
"Further Charge - Without Possession from Rs. 1 Cr. To Rs. 10 Cr. [27(b)(ii)]",
"Gift [28]",
"Lease - (Imm. Property) - Premium or Money Adv. [30(b)]",
"Lease - (Imm. Property) - Rent + Premium or Money Adv. [30(c)]",
"Lease / Leave and License 1 Year To 5 Years Commercial Property [30(a)(i)(i)]",
"Lease / Leave and License 1 Year To 5 Years Residential Property [30(a)(ii)(i)]",
"Lease / Leave and License 15 Years To 30 Years [30(a)(iv)]",
"Lease / Leave and License 30 Years To 99 Years [30(a)(v)]",
"Lease / Leave and License 5 Years To 15 Years [30(a)(iii)]",
"Lease / Leave and License Excess 99 Years [30(a)(vi)]",
"Lease / Leave and License Less than 1 Year Commercial Property [30(a)(i)]",
"Lease / Leave and License Less than 1 Year Residential Property [30(a)(ii)]",
"Mortgage Deed - With Possession [36(a)]",
"Mortgage Deed - With Possession-Additional Collateral [36(c)]",
"Mortgage Deed - Without Possession [36(b)]",
"Partitioned [43]",
"Partnership - Alteration (Other than clause a.) [44(2)(b)]",
"Partnership - Dissolution [44(3)(a)]",
"Partnership - Dissolution in any other case [44(3)(b)]",
"Partnership [1] (a)- by Cash [44(1)(a)]",
"Partnership [1] (b)- by Immovable Property [44(1)(b)]",
"Partnership [1] (c)- by Cash and Immovable Property [44(1)(c)]",
"Pledge, Loan or Hypothecation - Movable Property Loan/Debt Exceeds Rs. 10 Cr. [6(2)(a)(iii)]",
"Pledge, Loan or Hypothecation - Movable Property Loan/Debt from Rs. 1 Cr to Rs. 10 Cr. [6(2)(a)(ii)]",
"Pledge, Loan or Hypothecation - Movable Property Loan/Debt not Exceeds Rs. 1 Cr [6(2)(a)(i)]",
"Power of Attorney (Development) [45(g)]",
"Power of Attorney (in any other case) [45(h)]",
"Power of Attorney - For Consideration - Sale of Immovable Property [45(f)(i)]",
"Power of Attorney - More than 5 persons [45(e)]",
"Power of Attorney - Other than clause 45(a) [45(c)]",
"Power of Attorney - Registration of Document - Single Transaction [45(a)]",
"Power of Attorney - Registration of Document - Sole Purpose [45(a)]",
"Power of Attorney - Sale of Immovable Property by Relative [45(f)(ii)(a)]",
"Power of Attorney - Sale of Immovable Property other than Relative [45(f)(ii)(b)]",
"Power of Attorney - Suits - Small Cause Courts Act [45(b)]",
"Power of Attorney - Not More than 5 persons [45(d)]",
"Reconveyance of Mortgaged Property [48]",
"Record of Transaction [48-A(a)]",
"Release Ancestral Property [49(a)]",
"Release-In Any Other Case [49(b)]",
"Settlement - Other Case [52 A(i)]",
"Settlement - Religious or Charitable purpose [52 A(i)]",
"Settlement - Revocation - Other Case [52 B(i)]",
"Settlement - Revocation - Religious or Charitable [52 B(i)]",
"Surrender of Lease [55]",
"Transfer - Interest Secured by Bond [56(b)]",
"Transfer - Trustees or Beneficiary (Without - Consideration) [56(d)]",
"Transfer - Under the Administrators Gen. Act 1963, Sec. 22 [56(c)]",
"Transfer of Lease [57]",
"Trust - Declaration [58(a)]",
"Trust - Revocation [58(b)]"
];

const NON_REGISTERABLE_ARTICLES = [
"Administration Bond [2]",
"Affidavit [4]",
"Agreement (not otherwise provided for) [5(h)]",
"Agreement - Media Advertisement - Other than Newspapers [5(gb)]",
"Agreement - Purchase or Sale of Bullion, Spice [5(e)]",
"Agreement - Purchase or Sale of Cotton [5(d)]",
"Agreement - Purchase or Sale of Govt. Sec. [5(b)]",
"Agreement - Purchase or Sale of Oil Seeds [5(f)]",
"Agreement - Purchase or Sale of Yarn [5(g)]",
"Agreement - Sale of Bill of Exchange [5(a)]",
"Agreement For Project under BOT, Concession, PPP Or Not cover under any other Articles [5(gc)]",
"Agreement relating to Purchase or Sale of Shares, Debentures etc [5(c)]",
"Alteration - Article of Association of a Company [7]",
"Alteration - Memorandum of Association of a Company Without Article of Association [8(b)]",
"Alteration - Memorandum of Association of a Company With Article of Association [8(a)]",
"Application - under RTI Act [99]",
"Appointment in Execution of Power - Movable / Immovable [9(b)]",
"Appointment in Execution of Power - Trustees [9(a)]",
"Appraisement or Valuation [10]",
"Apprenticeship Deed [11]",
"Articles of Association [12]",
"Award [13]",
"Bond - Exceed Rs. 10 Cr. [14(iii)]",
"Bond - From Rs. 1 Cr. To 10 Cr. [14(ii)]",
"Bond - Not Exceed Rs. 1 Cr. [14(i)]",
"Bottomry Bond - Above Rs. 10 Crore [15]",
"Bottomry Bond - Up To Rs. 10 Crore [15]",
"Cancellation for movable - Property [16]",
"Composition Deed [19]",
"Conveyance - Movable Property [20(aa)]",
"Copy or Extract - For Birth, Death, Name Change, Marriage, Divorce etc. [21(b)]",
"Copy or Extract - For and By Government [21(a)]",
"Counter Part or Duplicate [22]",
"Customs Bond or Excise Bond [23]",
"Delivery Order in respect of Goods [24]",
"Divorce [25]",
"Indemnity Bond [29]",
"Lease - Movable Property [30 D]",
"Letter of Guarantee [32]",
"Letter of License [33]",
"Marriage Registration [34]",
"Memorandum of Association of Company - Without Article of Association [35(b)]",
"Memorandum of Association of Company - With Article of Association [35(a)]",
"Mortgage of Crop [37(b)]",
"Mortgage of Crop - Not more than 3 months [37(a)]",
"Notarial Act [38]",
"Note of Protest by the Master of a Ship [41]",
"Note or Entry or Letter Written by Creditor [40]",
"Note or Memorandum - Bullion / Specie [39(b)]",
"Note or Memorandum - Cotton [39(a)]",
"Note or Memorandum - Goods (other than Article 39 a,b,c,d) [39(e)]",
"Note or Memorandum - Govt. Security [39(g)]",
"Note or Memorandum - Oil Seeds [39(c)]",
"Note or Memorandum - Stocks / Debenture [39(f)]",
"Note or Memorandum - Yarn / Non Mineral Oils [39(d)]",
"Order for the Payment of Money - More than 1 year - Above 10 Crore [42(b)]",
"Partnership - Dissolution in any other case [44(3)(b)]",
"Partnership [2] (a)- by Constitution Alteration - Capital Increase [44(2)(a)]",
"Protest by the Master of a Ship [47]",
"Protest of Bill or Note [46]",
"Respondentia Bond - Above Rs. 10 Crore [50]",
"Respondentia Bond - Up To Rs. 10 Crore [50]",
"Security Bond or Mortgage - Deed [51]",
"Share Warrants - Above Rs. 10 Crore [53]",
"Share Warrants - Up To Rs. 10 Crore [53]",
"Transfer of Debenture [56(a)]"
];

function val(id){return document.getElementById(id).value.trim();}
function upper(v){return v.toLocaleUpperCase();}
function paidByName(){return val("paidBy")==="secondParty"?val("secondParty"):val("firstParty");}
function selectedDutyType(){return document.querySelector('input[name="dutyType"]:checked').value;}
function updateArticleOptions(preferredValue){
 const article=document.getElementById("article");
 const type=selectedDutyType();
 const options=type==="registerable"?REGISTERABLE_ARTICLES:NON_REGISTERABLE_ARTICLES;
 article.innerHTML="";
 const placeholder=document.createElement("option"); placeholder.value=""; placeholder.textContent="Select Stamp duty [Article Number]"; article.appendChild(placeholder);
 options.forEach(text=>{const o=document.createElement("option");o.value=text;o.textContent=text;article.appendChild(o);});
 if(preferredValue && options.includes(preferredValue)) article.value=preferredValue;
 else article.value="";
 update();
}
function message(){return `*ARTICLE:* ${upper(val("article")||"NOT SELECTED")}\n*AMOUNT:* ₹${val("amount")}\n*DESCRIPTION:* ${upper(val("description"))}\n*FIRST PARTY:* ${upper(val("firstParty"))}\n*SECOND PARTY:* ${upper(val("secondParty"))}\n*PAID BY:* ${upper(paidByName())}`;}
function update(){document.getElementById("preview").value=message();try { localStorage.setItem("stampDetails", JSON.stringify(Object.fromEntries(ids.map(id=>[id,val(id)])))); } catch(e) {}}
["amount","description","firstParty","secondParty"].forEach(id=>document.getElementById(id).addEventListener("input",update));
document.getElementById("article").addEventListener("change",update);
document.getElementById("paidBy").addEventListener("change",update);
document.querySelectorAll('input[name="dutyType"]').forEach(r=>r.addEventListener("change",()=>updateArticleOptions()));
document.getElementById("copy").addEventListener("click",async()=>{
 const text=message(); const s=document.getElementById("status");
 try { await navigator.clipboard.writeText(text); s.textContent="MESSAGE COPIED!"; }
 catch(e) { const ta=document.getElementById("preview"); ta.focus(); ta.select(); s.textContent="Select and copy the preview message."; }
});
document.getElementById("sendWhatsApp").addEventListener("click",()=>{
 const text=message();
 const raw=(document.getElementById("recipient").value||"").replace(/\D/g,"");
 if(raw && raw.length<8){document.getElementById("status").textContent="Enter a valid phone number with country code, or leave it blank.";return;}
 const url=raw ? `https://wa.me/${raw}?text=${encodeURIComponent(text)}` : `https://wa.me/?text=${encodeURIComponent(text)}`;
 document.getElementById("status").textContent="Opening WhatsApp. Review the draft and press Send yourself.";
 window.location.href=url;
});
try {
 const data=JSON.parse(localStorage.getItem("stampDetails")||"{}");
 ["amount","description","firstParty","secondParty","paidBy"].forEach(id=>{if(data[id]!==undefined)document.getElementById(id).value=data[id];});
 const type=data.article && data.article!=="Non-Registerable Stamp Duty"?"registerable":"nonregisterable";
 document.querySelector(`input[name="dutyType"][value="${type}"]`).checked=true;
 updateArticleOptions(data.article);
} catch(e) { updateArticleOptions(); }
