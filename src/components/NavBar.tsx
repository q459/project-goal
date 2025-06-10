"use client";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";

export default function NavBar() {
    const router = useRouter();
    const items = [
        {
            label: "首頁 Home",
            icon: "pi pi-home",
            command: () => router.push("/"),
        },
        {
            label: "多層選單",
            icon: "pi pi-check",
            items: [
                {
                    label: "頁面一",
                    icon: "pi pi-plus",
                    command: () => router.push("/page1"),
                },
                {
                    label: "頁面二",
                    icon: "pi pi-plus",
                    command: () => router.push("/page2"),
                },
            ],
        },
        {
            label: "註冊 Register",
            icon: "pi pi-user",
            command: () => router.push("/register"),
        },
        {
            label: "登入 Login",
            icon: "pi pi-user",
            command: () => router.push("/login"),
        },
        {
            label: "會員 member",
            icon: "pi pi-user",
            command: () => router.push("/member"),
        },

        {
            label: "購物車 shopping cart",
            icon: "pi pi-user",
            command: () => router.push("shopping"),
        },
    ];
    const end = (
        <div className="flex align-items-center gap-2">
            <Button icon="pi pi-user" rounded text />
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} end={end} />
        </div>
    );
}