export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Looneyesstudio - Cảm xúc hùng vĩ sẽ không phai đi",
  description: "Cảm xúc hùng vĩ sẽ không phai đi",
  navItems: [
    {
      label: "TRANG CHỦ",
      href: "/",
    },
    {
      label: "GIỚI THIỆU LOON EYES",
      href: "/intro",
    },
    {
      label: "DỰ ÁN ĐÃ THỰC HIỆN",
      href: "/news",
    },
    {
      label: "DỊCH VỤ CUNG CẤP",
      href: "/services",
    },
    {
      label: "LIÊN HỆ",
      href: "/contact",
    },
  ],
  admin: [
    {
      label: "Khách hàng",
      href: "/admin",
    },
    {
      label: "Bài viết",
      href: "/admin/news",
    },
    {
      label: "Hình ảnh",
      href: "/admin/images",
    },
    {
      label: "Cấu hình",
      href: "/admin/config",
    },
  ],
};
