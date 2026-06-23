const RESPONSIVE_WIDTH = 1024

let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH
const collapseBtn = document.getElementById("collapse-btn")
const collapseHeaderItems = document.getElementById("collapsed-header-items")
const siteHeader = document.querySelector(".site-header")
const progressBar = document.querySelector(".scroll-progress")
const heroBg = document.querySelector("[data-parallax]")

function onHeaderClickOutside(e) {
    if (!collapseHeaderItems || !collapseBtn) return
    if (!collapseHeaderItems.contains(e.target) && e.target !== collapseBtn) {
        toggleHeader()
    }
}

function toggleHeader() {
    if (!collapseHeaderItems || !collapseBtn) return

    if (isHeaderCollapsed) {
        collapseHeaderItems.classList.add("opacity-100")
        collapseHeaderItems.style.width = "72vw"
        collapseBtn.classList.remove("bi-list")
        collapseBtn.classList.add("bi-x", "max-lg:tw-fixed")
        isHeaderCollapsed = false
        setTimeout(() => window.addEventListener("click", onHeaderClickOutside), 1)
    } else {
        collapseHeaderItems.classList.remove("opacity-100")
        collapseHeaderItems.style.width = "0vw"
        collapseBtn.classList.remove("bi-x", "max-lg:tw-fixed")
        collapseBtn.classList.add("bi-list")
        isHeaderCollapsed = true
        window.removeEventListener("click", onHeaderClickOutside)
    }
}

function responsive() {
    if (!collapseHeaderItems || !collapseBtn) return

    if (window.innerWidth > RESPONSIVE_WIDTH) {
        collapseHeaderItems.style.width = ""
        collapseHeaderItems.classList.remove("opacity-100")
        isHeaderCollapsed = false
    } else if (!collapseBtn.classList.contains("bi-x")) {
        isHeaderCollapsed = true
    }
}

function updateScrollEffects() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0

    progressBar?.style.setProperty("width", `${progress}%`)
    siteHeader?.classList.toggle("is-scrolled", scrollTop > 24)

    if (heroBg && window.innerWidth > 768) {
        heroBg.style.transform = `scale(1.04) translateY(${scrollTop * 0.06}px)`
    }
}

window.addEventListener("resize", responsive)
window.addEventListener("scroll", updateScrollEffects, { passive: true })
updateScrollEffects()

const countries = [
    "東京", "京都", "奈良", "金沢", "北海道", "瀬戸内", "直島", "高野山", "屋久島",
    "富士山", "白川郷", "日光", "箱根", "熊野古道", "沖縄", "長野", "飛騨高山"
]

const places = [
    "茶の湯体験", "町家ステイ", "温泉旅館", "寿司カウンター", "早朝寺院拝観",
    "酒蔵見学", "陶芸工房", "島サイクリング", "雪見露天風呂", "市場ツアー"
]

const countriesContainer = document.querySelector(".countries-container")
const placeContainer = document.querySelector(".places-container")

function addSlidingPlace(place, container) {
    if (!container) return

    container.innerHTML += `
        <div class="tw-min-w-fit tw-p-2 tw-px-4 tw-w-max tw-h-[50px]
                    tw-border-solid tw-border-[1px] tw-flex
                    tw-rounded-md tw-border-black
                    tw-place-items-center tw-place-content-center
                    tw-overflow-clip sliding-image">
            ${place}
        </div>
    `
}

countries.concat(countries).forEach((place) => addSlidingPlace(place, countriesContainer))
places.concat(places, places).forEach((place) => addSlidingPlace(place, placeContainer))

document.querySelectorAll(".lift-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

        const rect = card.getBoundingClientRect()
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 6
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * -6
        card.style.transform = `translateY(-6px) rotateX(${y}deg) rotateY(${x}deg)`
    })

    card.addEventListener("pointerleave", () => {
        card.style.transform = ""
    })
})

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= RESPONSIVE_WIDTH && !isHeaderCollapsed) {
            toggleHeader()
        }
    })
})

const faqAccordion = document.querySelectorAll(".faq-accordion")

faqAccordion.forEach((btn) => {
    btn.addEventListener("click", function () {
        this.classList.toggle("active")
        const content = this.nextElementSibling
        const icon = this.querySelector("i")

        if (content.style.maxHeight === "260px") {
            content.style.maxHeight = "0px"
            content.style.padding = "0px 20px"
            icon?.classList.remove("bi-dash")
            icon?.classList.add("bi-plus")
        } else {
            content.style.maxHeight = "260px"
            content.style.padding = "0px 20px 22px"
            icon?.classList.remove("bi-plus")
            icon?.classList.add("bi-dash")
        }
    })
})

document.querySelectorAll(".contact-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault()

        const status = form.querySelector(".form-status")
        const submit = form.querySelector("button[type='submit']")
        const requiredFields = form.querySelectorAll("input, textarea")
        const missingField = Array.from(requiredFields).find((field) => field.hasAttribute("required") && !field.value.trim())

        if (missingField) {
            missingField.focus()
            if (status) status.textContent = "未入力の項目があります。内容をご確認ください。"
            return
        }

        if (submit) {
            submit.textContent = "送信済み"
            submit.setAttribute("disabled", "true")
        }
        if (status) status.textContent = "ありがとうございます。担当者より2営業日以内にご連絡します。"
        form.classList.add("is-submitted")
    })
})

if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set(".reveal-up", {
        opacity: 0,
        y: 44,
    })

    const sections = gsap.utils.toArray("section")

    sections.forEach((sec) => {
        const revealItems = sec.querySelectorAll(".reveal-up")
        if (!revealItems.length) return

        gsap.to(revealItems, {
            opacity: 1,
            y: 0,
            duration: 0.86,
            stagger: 0.14,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sec,
                start: "10% 82%",
            },
        })
    })

    gsap.to(".route-board", {
        y: -22,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1,
        },
    })
}
