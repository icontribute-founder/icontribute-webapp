import axios, { AxiosInstance } from "axios";
import createAuthRefreshInterceptor, {
    AxiosAuthRefreshOptions,
} from "axios-auth-refresh";
import { AuthUser } from "./models/auth";

interface AuthApiClientProps {
    baseUrl: string;
    getAccessToken: () => string;
    setAccessToken: (token: string) => void;
    getRefreshToken: () => string;
    setRefreshToken: (token: string) => void;
    tokenRefreshOptions?: AxiosAuthRefreshOptions | undefined;
}

class AuthApiClient {
    private client: AxiosInstance;

    private getAccessToken: () => string;
    private getRefreshToken: () => string;
    private setAccessToken: (token: string) => void;
    private setRefreshToken: (token: string) => void;

    private constructor(props: AuthApiClientProps) {
        this.client = axios.create({ baseURL: props.baseUrl });

        this.getAccessToken = props.getAccessToken;
        this.setAccessToken = props.setAccessToken;
        this.getRefreshToken = props.getRefreshToken;
        this.setRefreshToken = props.setRefreshToken;
    }

    /**
     *
     * @param props
     * @returns
     */
    public static create(props: AuthApiClientProps): AuthApiClient {
        const client = new AuthApiClient(props);
        client.configApiRequestAuth();
        client.configTokenRefresh(props.tokenRefreshOptions);
        return client;
    }

    /**
     *
     */
    private configApiRequestAuth() {
        this.client.interceptors.request.use((request) => {
            request.headers[
                "Authorization"
            ] = `Bearer ${this.getAccessToken()}`;
            return request;
        });
    }

    /**
     *
     * @param getRefreshBody
     * @param options
     */
    private configTokenRefresh(options?: AxiosAuthRefreshOptions | undefined) {
        const getNewAccessToken = async (failedRequest: any) => {
            const body = {
                accessToken: this.getAccessToken,
                refreshToken: this.getRefreshToken,
            };
            this.client.post("/token", body).then((res) => {
                const { accessToken } = res.data;

                this.setAccessToken(accessToken);
                failedRequest.response.config.headers.Authorization = `Bearer ${accessToken}`;
                return Promise.resolve();
            });
        };

        createAuthRefreshInterceptor(this.client, getNewAccessToken, options);
    }

    /**
     *
     * @param auth
     */
    public async login(auth: AuthUser) {
        const { data } = await this.client.post("/login", auth);

        if (!data || !data.accessToken || !data.refreshToken) {
            throw Error("Tokens are not found");
        }

        this.setAccessToken(data.accessToken);
        this.setRefreshToken(data.refreshToken);
    }
}

export default AuthApiClient;