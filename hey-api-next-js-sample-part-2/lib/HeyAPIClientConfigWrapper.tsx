"use client"

import {ReactNode, useEffect} from "react";
import {client} from "@/client/client.gen";

interface  HeyAPIClientConfigWrapperProps {
    children: ReactNode;
}

export default function HeyAPIClientConfigWrapper({ children } : HeyAPIClientConfigWrapperProps) {
    useEffect(() => {

        client.setConfig({
            baseUrl: process.env.NEXT_PUBLIC_API_URL!,
        })

        const requestId = client.interceptors.request.use(async (request) => {

            request.headers.set('Accept', 'application/json');
            request.headers.set('Authorization', btoa("johndoe@test.com:passwordhere"));
            return request;
        });

        const responseId = client.interceptors.response.use(async (response) => {
            return response;
        });

        // Cleanup
        return () => {
            client.interceptors.request.eject(requestId);
            client.interceptors.response.eject(responseId);
        };
    }, []);

    return children;
}