document.getElementById("calcBtn").addEventListener("click", () => {
  const birthDate = document.getElementById("birthDate").value;
  const weight = parseFloat(document.getElementById("weight").value);// ======== 預設帶出上次輸入的生日 ========
window.addEventListener("DOMContentLoaded", () => {
  const savedBirth = localStorage.getItem("lastBirthDate");
  if (savedBirth) {
    document.getElementById("birthDate").value = savedBirth;
  }
});

document.getElementById("calcBtn").addEventListener("click", () => {
  const birthDate = document.getElementById("birthDate").value;
  const weight = parseFloat(document.getElementById("weight").value);

  if (!birthDate || !weight) {
    alert("請完整填寫所有欄位！");
    return;
  }

  // ===== 儲存生日到 localStorage =====
  localStorage.setItem("lastBirthDate", birthDate);

  // ===== 計算狗狗實際年齡 =====
  const today = new Date();
  const birth = new Date(birthDate);
  let diffMonths =
    (today.getFullYear() - birth.getFullYear()) * 12 +
    (today.getMonth() - birth.getMonth());

  if (today.getDate() < birth.getDate()) diffMonths -= 1;

  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;

  // ===== 換算人類年齡 =====
  const dogAgeInYears = diffMonths / 12;
  let humanAgeYears = 16 * Math.log(dogAgeInYears) + 31;

  if (dogAgeInYears <= 0) {
    humanAgeYears = 0;
  }

  const humanYearsInt = Math.floor(humanAgeYears);
  const humanMonthsInt = Math.floor((humanAgeYears - humanYearsInt) * 12);

  // ===== 體型分級 =====
  let size = "";
  if (weight < 10) size = "小型犬（<10kg）";
  else if (weight < 25) size = "中型犬（10–25kg）";
  else if (weight < 40) size = "大型犬（25–40kg）";
  else size = "巨型犬（>40kg）";

  // ===== 顯示結果 =====
  document.getElementById("dogAge").innerText =
    `🐕 狗狗實際年齡：${years} 歲 ${months} 個月`;

  document.getElementById("humanAge").innerText =
    `👨‍🦳 換算人類年齡：約 ${humanYearsInt} 歲 ${humanMonthsInt} 個月`;

  document.getElementById("sizeLevel").innerText =
    `📏 體型分級：${size}`;

  document.getElementById("result").classList.remove("hidden");
});


  if (!birthDate || !weight) {
    alert("請完整填寫所有欄位！");
    return;
  }

  // ===== 計算狗狗實際年齡 =====
  const today = new Date();
  const birth = new Date(birthDate);
  let diffMonths =
    (today.getFullYear() - birth.getFullYear()) * 12 +
    (today.getMonth() - birth.getMonth());

  if (today.getDate() < birth.getDate()) diffMonths -= 1;

  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;

  // ===== 換算人類年齡 =====
  // 人類年齡 = 16 × ln（狗狗年齡）+ 31
  const dogAgeInYears = diffMonths / 12;
  let humanAgeYears = 16 * Math.log(dogAgeInYears) + 31;

  if (dogAgeInYears <= 0) {
    humanAgeYears = 0;
  }

  const humanYearsInt = Math.floor(humanAgeYears);
  const humanMonthsInt = Math.floor((humanAgeYears - humanYearsInt) * 12);

  // ===== 體型分級（依體重） =====
  let size = "";
  if (weight < 10) size = "小型犬（<10kg）";
  else if (weight < 25) size = "中型犬（10–25kg）";
  else if (weight < 40) size = "大型犬（25–40kg）";
  else size = "巨型犬（>40kg）";

  // ===== 輸出到畫面 =====
  document.getElementById("dogAge").innerText =
    `🐕 狗狗實際年齡：${years} 歲 ${months} 個月`;

  document.getElementById("humanAge").innerText =
    `👨‍🦳 換算人類年齡：約 ${humanYearsInt} 歲 ${humanMonthsInt} 個月`;

  document.getElementById("sizeLevel").innerText =
    `📏 體型分級：${size}`;

  document.getElementById("result").classList.remove("hidden");
});
