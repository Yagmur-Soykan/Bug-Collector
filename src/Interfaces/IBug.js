/**
 * @interface IBug
 * @property {string} id - Benzersiz kimlik
 * @property {string} name - Böcek adı
 * @property {string} severity - Şiddet seviyesi
 * @property {string} description - Hata açıklaması
 */

// JavaScript'te nesne yapısını korumak için örnek bir şablon
export const BugTemplate = {
  id: "",
  name: "",
  severity: "",
  description: "",
};

// Şiddet seviyeleri
export const BugSeverity = {
  LOW: "Küçük - Önemsiz Hata",
  MEDIUM: "Orta - Önemli Hata",
  HIGH: "Büyük - Kritik Hata",
};
