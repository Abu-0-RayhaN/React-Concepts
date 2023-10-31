export default function Contact() {
  return (
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-6 bg-light rounded-lg p-4">
          <h1 class="text-3xl font-extrabold mb-2">Get in touch:</h1>
          <p class="text-lg font-medium text-secondary mb-4">
            Fill in the form to start a conversation
          </p>

          <div class="mb-3 d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-gray-500"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              height={20}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <div class="ml-3 text-md font-semibold">
              Acme Inc, Street, State, Postal Code
            </div>
          </div>

          <div class="mb-3 d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-gray-500"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              height={20}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            <div class="ml-3 text-md font-semibold">+44 1234567890</div>
          </div>

          <div class="mb-3 d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-gray-500"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              height={20}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <div class="ml-3 text-md font-semibold">info@acme.org</div>
          </div>
        </div>

        <form class="col-md-6 mt-4 mt-md-0">
          <div class="mb-3">
            <label for="name" class="visually-hidden">
              Full Name
            </label>
            <input
              type="name"
              class="form-control"
              id="name"
              placeholder="Full Name"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="visually-hidden">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
          <div class="mb-3">
            <label for="tel" class="visually-hidden">
              Number
            </label>
            <input
              type="tel"
              class="form-control"
              id="tel"
              placeholder="Telephone Number"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
