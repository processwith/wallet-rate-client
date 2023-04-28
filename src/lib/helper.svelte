
<script context="module">
export function basicHeader(method, body)
{
    const basicToken = btoa(`changemoney_api:N4&**S%Vl0C7MubL`)
    const request = {
        headers: {
            "Authorization": `Basic ${basicToken}`,
            "Content-Type": "application/json",
        },
        method: method,
    }

    if (method != 'GET')
        request.body = JSON.stringify(body);

    return request;
}

export function toggleMessage(message)
{
    let alert = document.querySelector("#alert");
    let alertMessage = document.querySelector("#alert-message");

    if (alert != null && alertMessage != null) {
        alert.classList.add("animate-bounce");
        alert.classList.remove("hidden");
        alertMessage.textContent = message;

        setTimeout(() => {
            alert.classList.remove("animate-bounce");
        }, 2000);

        setTimeout(() => {
            alert.classList.add("hidden");
        }, 3000)
    }
}

export function toggleButtonLoad(selector)
{
    let button = document.querySelector(selector);

    if (button != null)
    {
        button.classList.toggle("loading");

        if (button.disabled)
        {
            button.disabled = false;
        }
        else
        {
            button.disabled = true;
        }
    }
}

export function back()
{
    return history.back();
}

export function getEndpoint(endpoint)
{
    const apiUrl = "http://localhost:3000";
    return `${apiUrl}${endpoint}`;
}
</script>
