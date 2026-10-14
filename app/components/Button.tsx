"use client"

import Link from "next/link";

interface ButtonProps {
    label: string;
    href: string;
}

export default function Button({ label, href }: ButtonProps) {
    return (
        <div className="">
            <Link href={href}>
                <p>{label}</p>
            </Link>
        </div>
    )
}