export interface IContactFormData {
    name: string;
    email: string;
    message: string;
}

export function sendEmail(data: IContactFormData) {
    const apiEndpoint = "/api/email";

    fetch(apiEndpoint, {
        method: "POST",
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((response) => {
            alert(response.message);
        })
        .catch((err) => {
            alert(err);
        });
}
