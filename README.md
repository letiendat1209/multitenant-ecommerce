# 🏬 Multitenant Ecommerce

A powerful, extensible multitenant e-commerce platform built with **Next.js**, **Payload CMS**, and **Stripe Connect**, designed to support multiple vendors with custom storefronts on their own subdomains.

## 📖 Giới thiệu

**Multitenant Ecommerce** là nền tảng thương mại điện tử đa người bán, nơi mỗi vendor có thể sở hữu một cửa hàng độc lập trên subdomain riêng. Nền tảng hỗ trợ tùy chỉnh giao diện, quản lý sản phẩm, thanh toán tự động, vai trò người dùng linh hoạt và trải nghiệm mua sắm mượt mà.

> Được xây dựng với các công nghệ hiện đại như Next.js 15, Payload CMS, tRPC, Tailwind CSS và Stripe Connect.

---
![image](https://github.com/user-attachments/assets/efbe9399-be5b-4591-bdb1-bcc7ccbde9df)


## 🚀 Tính năng nổi bật

- 🏬 **Multi-tenant architecture** – mỗi merchant có không gian và dữ liệu riêng.
- 🌐 **Vendor subdomains** – hỗ trợ dạng `merchant.yoursite.com`.
- 🎨 **Custom merchant storefronts** – mỗi cửa hàng có giao diện độc lập.
- 💳 **Stripe Connect integration** – xử lý thanh toán và rút tiền an toàn.
- 💰 **Automatic platform fees** – chia phần trăm doanh thu tự động.
- ⭐ **Product ratings & reviews** – tăng uy tín sản phẩm.
- 📚 **User purchase library** – xem và quản lý đơn hàng đã mua.
- 🧑‍💼 **Role-based access control (RBAC)** – phân quyền admin, merchant, user.
- 🛠 **Admin & Merchant dashboards** – quản lý tập trung và chi tiết.
- 🧾 **Category & product filtering** – giúp người dùng tìm sản phẩm nhanh hơn.
- 🔍 **Full-text search** – tìm kiếm theo tên, mô tả sản phẩm.
- 🧱 **Payload CMS backend** – mở rộng linh hoạt, dễ tích hợp.

---

## ⚙️ Cài đặt

### 📦 Yêu cầu

- Node.js >= 18
- Bun (khuyên dùng)
- MongoDB (Payload CMS sử dụng MongoDB)

### 📥 Cài đặt và chạy dự án

```bash
git clone https://github.com/your-username/multitenant-ecommerce.git
cd multitenant-ecommerce

# Cài đặt gói
bun install

# Tạo types tự động từ Payload
bun run generate:types

# Khởi tạo database sạch và migrate
bun run db:fresh

# Seed dữ liệu
bun run db:seed

# Chạy development server
bun run dev
```
# 🧠 Công nghệ sử dụng
Next.js 15

Payload CMS

Tailwind CSS 4

Stripe Connect

tRPC

React 19

MongoDB

Radix UI

[Zod, React Hook Form, Zustand, Lucide, etc.]

