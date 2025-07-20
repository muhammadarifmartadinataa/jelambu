import { ref, onMounted, onUnmounted, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext, computed, onBeforeUnmount, watch, nextTick, createBlock, createCommentVNode, openBlock, Fragment, renderList, withDirectives, withKeys, vModelText, vShow, vModelSelect, resolveDirective, createElementBlock, normalizeClass, renderSlot, createElementVNode, normalizeProps, guardReactiveProps, resolveDynamicComponent, toHandlers, Transition, withModifiers, createSSRApp, h as h$1 } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { usePage, Link, Head, createInertiaApp } from "@inertiajs/vue3";
import { Swiper } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import axios from "axios";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _sfc_main$d = {
  __name: "AppLayout",
  __ssrInlineRender: true,
  props: {
    currentLang: {
      type: String,
      default: "id"
    }
  },
  setup(__props) {
    const showMobileMenu = ref(false);
    const showLanguageDropdown = ref(false);
    const languageDropdown = ref(null);
    const page = usePage();
    const __t = (key) => {
      const translations = page.props.translations || {};
      return key.split(".").reduce((obj, part) => obj && obj[part], translations) || key;
    };
    const handleClickOutside = (event) => {
      if (languageDropdown.value && !languageDropdown.value.contains(event.target)) {
        showLanguageDropdown.value = false;
      }
    };
    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });
    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 font-sans" }, _attrs))}><nav class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200/50 shadow-sm"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between items-center h-20">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("beranda")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/assets/images/logo/logo-jelambu.svg" alt="Jelambu" class="h-16"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/assets/images/logo/logo-jelambu.svg",
                alt: "Jelambu",
                class: "h-16"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden md:flex items-center space-x-8">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("beranda"),
        class: ["text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200", { "text-primary-600": _ctx.$page.component === "Beranda" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__t("nav.home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(__t("nav.home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("kabupaten"),
        class: ["text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200", { "text-primary-600": _ctx.$page.component === "Kabupaten" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__t("nav.regencies"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(__t("nav.regencies")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("wisata"),
        class: ["text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200", { "text-primary-600": _ctx.$page.component === "Wisata/Index" || _ctx.$page.component === "Wisata/Show" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__t("nav.destinations"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(__t("nav.destinations")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("chatbot"),
        class: ["text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200", { "text-primary-600": _ctx.$page.component === "Chatbot" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__t("nav.chatbot"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(__t("nav.chatbot")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("reviews"),
        class: ["text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200", { "text-primary-600": _ctx.$page.component === "Reviews" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__t("nav.reviews"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(__t("nav.reviews")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center space-x-4"><div class="relative"><button class="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors duration-200"><span class="text-sm font-medium">${ssrInterpolate(__props.currentLang.toUpperCase())}</span><i class="ti ti-chevron-down text-sm"></i></button><div style="${ssrRenderStyle(showLanguageDropdown.value ? null : { display: "none" })}" class="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"><button class="${ssrRenderClass([{ "text-primary-600 bg-primary-50": __props.currentLang === "id" }, "w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200"])}"> 🇮🇩 Indonesia </button><button class="${ssrRenderClass([{ "text-primary-600 bg-primary-50": __props.currentLang === "en" }, "w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200"])}"> 🇺🇸 English </button></div></div><button class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"><i class="ti ti-menu-2 text-xl"></i></button></div></div><div style="${ssrRenderStyle(showMobileMenu.value ? null : { display: "none" })}" class="md:hidden py-4 border-t border-gray-200"><div class="space-y-2">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("beranda"),
        class: ["block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200", { "text-white bg-primary-600": _ctx.$page.component === "Beranda" }],
        onClick: ($event) => showMobileMenu.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__t("nav.home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(__t("nav.home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("kabupaten"),
        class: ["block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200", { "text-white bg-primary-600": _ctx.$page.component === "Kabupaten" }],
        onClick: ($event) => showMobileMenu.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__t("nav.regencies"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(__t("nav.regencies")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("wisata"),
        class: ["block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200", { "text-white bg-primary-600": _ctx.$page.component === "Wisata/Index" || _ctx.$page.component === "Wisata/Show" }],
        onClick: ($event) => showMobileMenu.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__t("nav.destinations"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(__t("nav.destinations")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("chatbot"),
        class: ["block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200", { "text-white bg-primary-600": _ctx.$page.component === "Chatbot" }],
        onClick: ($event) => showMobileMenu.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__t("nav.chatbot"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(__t("nav.chatbot")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("reviews"),
        class: ["block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200", { "text-white bg-primary-600": _ctx.$page.component === "Reviews" }],
        onClick: ($event) => showMobileMenu.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__t("nav.reviews"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(__t("nav.reviews")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></nav><main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="bg-gray-900 text-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div class="grid grid-cols-1 md:grid-cols-4 gap-8"><div class="md:col-span-2">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("beranda"),
        class: "mb-4 d-inline-block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/assets/images/logo/logo-jelambu-light.svg" alt="Jelambu" class="h-16"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/assets/images/logo/logo-jelambu-light.svg",
                alt: "Jelambu",
                class: "h-16"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-gray-300 mb-4">${ssrInterpolate(__t("footer.description"))}</p><p class="text-sm text-gray-400">${ssrInterpolate(__t("footer.made_with_love"))}</p></div><div><h4 class="text-lg font-semibold mb-4">${ssrInterpolate(__t("common.quick_links"))}</h4><div class="space-y-2">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("beranda"),
        class: "block text-gray-300 hover:text-white transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__t("nav.home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(__t("nav.home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("kabupaten"),
        class: "block text-gray-300 hover:text-white transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__t("nav.regencies"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(__t("nav.regencies")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("wisata"),
        class: "block text-gray-300 hover:text-white transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__t("nav.destinations"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(__t("nav.destinations")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("chatbot"),
        class: "block text-gray-300 hover:text-white transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__t("nav.chatbot"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(__t("nav.chatbot")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("reviews"),
        class: "block text-gray-300 hover:text-white transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__t("nav.reviews"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(__t("nav.reviews")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><h4 class="text-lg font-semibold mb-4">${ssrInterpolate(__t("common.contact"))}</h4><div class="space-y-2 text-gray-300"><p class="flex items-center space-x-2"><i class="ti ti-mail text-primary-600"></i><span>info@jelambu.com</span></p><p class="flex items-center space-x-2"><i class="ti ti-phone text-primary-600"></i><span>+62 812 3456 7890</span></p><p class="flex items-center space-x-2"><i class="ti ti-map-pin text-primary-600"></i><span>Bandar Lampung, Indonesia</span></p></div></div></div><div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"><p>© 2024 Jelambu. ${ssrInterpolate(__t("footer.all_rights_reserved"))}</p></div></div></footer></div>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$c = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const slides = ref([
      {
        id: 1,
        title: '"Lossless Youths"',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg"
      },
      {
        id: 2,
        title: '"Estrange Bond"',
        description: "Tempore fuga voluptatum, iure corporis inventore praesentium nisi.",
        image: "https://i.redd.it/tc0aqpv92pn21.jpg"
      },
      {
        id: 3,
        title: '"The Gate Keeper"',
        description: "Id laboriosam ipsam enim. Tempore fuga voluptatum.",
        image: "https://wharferj.files.wordpress.com/2015/11/bio_north.jpg"
      },
      {
        id: 4,
        title: '"Last Trace Of Us"',
        description: "Badan terasa ngambang. Lorem ipsum dolor sit amet.",
        image: "https://images7.alphacoders.com/878/878663.jpg"
      },
      {
        id: 5,
        title: '"Urban Decay"',
        description: "Satu dua tiga empat lima enam tujuh delapan.",
        image: "https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg"
      },
      {
        id: 6,
        title: '"The Migration"',
        description: "Deskripsi terakhir, sangat sinematik dan estetik.",
        image: "https://da.se/app/uploads/2015/09/simon-december1994.jpg"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-section h-screen relative overflow-hidden" }, _attrs))} data-v-160f24b4><ul class="slider w-full h-full relative" data-v-160f24b4><!--[-->`);
      ssrRenderList(slides.value, (slide) => {
        _push(`<li class="item absolute bg-center bg-cover rounded-lg shadow-inner text-white transition-all duration-700 ease-in-out" style="${ssrRenderStyle({ backgroundImage: `url(${slide.image})` })}" data-v-160f24b4><div class="content absolute text-white drop-shadow-md" data-v-160f24b4><h2 class="title text-2xl md:text-4xl uppercase font-black" data-v-160f24b4>${ssrInterpolate(slide.title)}</h2><p class="description text-sm md:text-base my-4 leading-relaxed" data-v-160f24b4>${ssrInterpolate(slide.description)}</p><button class="px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition" data-v-160f24b4> Read More </button></div></li>`);
      });
      _push(`<!--]--></ul><nav class="nav absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-4" data-v-160f24b4><button class="w-10 h-10 rounded-full bg-white/60 text-black hover:bg-white flex items-center justify-center" data-v-160f24b4><i class="ti ti-chevron-left" data-v-160f24b4></i></button><button class="w-10 h-10 rounded-full bg-white/60 text-black hover:bg-white flex items-center justify-center" data-v-160f24b4><i class="ti ti-chevron-right" data-v-160f24b4></i></button></nav></section>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HeroSection.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-160f24b4"]]);
const _sfc_main$b = {
  __name: "PopularDestinationSection",
  __ssrInlineRender: true,
  props: {
    wisatas: Array,
    __t: Function
  },
  setup(__props) {
    const swiperContainer = ref(null);
    onMounted(() => {
      if (swiperContainer.value) {
        new Swiper(swiperContainer.value, {
          modules: [Navigation, Pagination, Autoplay],
          slidesPerView: 1,
          spaceBetween: 24,
          loop: true,
          autoplay: {
            delay: 5e3,
            disableOnInteraction: false
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev"
          },
          breakpoints: {
            640: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 bg-white" }, _attrs))} data-v-3c2fe1ca><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-3c2fe1ca><div class="text-center mb-12" data-v-3c2fe1ca><h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-v-3c2fe1ca>${ssrInterpolate(__props.__t("home.popular_destinations"))}</h2><p class="text-md lg:text-xl text-gray-600 max-w-3xl mx-auto" data-v-3c2fe1ca>${ssrInterpolate(__props.__t("home.popular_description"))}</p></div><div class="swiper py-4 px-4" data-v-3c2fe1ca><div class="swiper-wrapper mb-8" data-v-3c2fe1ca><!--[-->`);
      ssrRenderList(__props.wisatas.slice(0, 6), (wisata) => {
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("wisata.show", wisata.slug),
          key: wisata.id,
          class: "swiper-slide"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b;
            if (_push2) {
              _push2(`<div class="bg-white hover:ring-2 hover:ring-primary-600 rounded-xl shadow-sm overflow-hidden h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300" data-v-3c2fe1ca${_scopeId}><div class="relative h-48" data-v-3c2fe1ca${_scopeId}><img${ssrRenderAttr("src", "/storage/" + wisata.thumbnail)}${ssrRenderAttr("alt", wisata.nama)} class="w-full h-full object-cover" loading="lazy" data-v-3c2fe1ca${_scopeId}><div class="swiper-lazy-preloader" data-v-3c2fe1ca${_scopeId}></div><div class="absolute top-4 right-4 bg-white backdrop-blur-sm px-2 py-1 rounded-lg" data-v-3c2fe1ca${_scopeId}><div class="flex items-center space-x-1" data-v-3c2fe1ca${_scopeId}><i class="ti ti-star-filled text-yellow-400 text-sm" data-v-3c2fe1ca${_scopeId}></i><span class="text-sm font-medium" data-v-3c2fe1ca${_scopeId}>${ssrInterpolate(wisata.rating)}</span></div></div></div><div class="p-6" data-v-3c2fe1ca${_scopeId}><div class="flex items-center text-sm text-gray-500 mb-2" data-v-3c2fe1ca${_scopeId}><i class="ti ti-map-pin-filled mr-1 text-primary-600 text-lg" data-v-3c2fe1ca${_scopeId}></i> ${ssrInterpolate((_a = wisata.kabupaten) == null ? void 0 : _a.nama_kabupaten)}</div><h3 class="text-xl font-semibold text-gray-900 mb-4" data-v-3c2fe1ca${_scopeId}>${ssrInterpolate(wisata.nama)}</h3>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route(
                  "wisata.show",
                  wisata.slug
                ),
                class: "inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.__t("common.view_details"))} <i class="ti ti-arrow-right ml-1" data-v-3c2fe1ca${_scopeId2}></i>`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.__t("common.view_details")) + " ", 1),
                      createVNode("i", { class: "ti ti-arrow-right ml-1" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "bg-white hover:ring-2 hover:ring-primary-600 rounded-xl shadow-sm overflow-hidden h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300" }, [
                  createVNode("div", { class: "relative h-48" }, [
                    createVNode("img", {
                      src: "/storage/" + wisata.thumbnail,
                      alt: wisata.nama,
                      class: "w-full h-full object-cover",
                      loading: "lazy"
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "swiper-lazy-preloader" }),
                    createVNode("div", { class: "absolute top-4 right-4 bg-white backdrop-blur-sm px-2 py-1 rounded-lg" }, [
                      createVNode("div", { class: "flex items-center space-x-1" }, [
                        createVNode("i", { class: "ti ti-star-filled text-yellow-400 text-sm" }),
                        createVNode("span", { class: "text-sm font-medium" }, toDisplayString(wisata.rating), 1)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "p-6" }, [
                    createVNode("div", { class: "flex items-center text-sm text-gray-500 mb-2" }, [
                      createVNode("i", { class: "ti ti-map-pin-filled mr-1 text-primary-600 text-lg" }),
                      createTextVNode(" " + toDisplayString((_b = wisata.kabupaten) == null ? void 0 : _b.nama_kabupaten), 1)
                    ]),
                    createVNode("h3", { class: "text-xl font-semibold text-gray-900 mb-4" }, toDisplayString(wisata.nama), 1),
                    createVNode(unref(Link), {
                      href: _ctx.route(
                        "wisata.show",
                        wisata.slug
                      ),
                      class: "inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.__t("common.view_details")) + " ", 1),
                        createVNode("i", { class: "ti ti-arrow-right ml-1" })
                      ]),
                      _: 2
                    }, 1032, ["href"])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="flex justify-between items-center" data-v-3c2fe1ca><div class="flex items-center gap-3" data-v-3c2fe1ca><button class="button-prev px-3 py-1 bg-white ring-1 ring-gray-200 bg-white text-primary-600 hover:bg-primary-600 hover:text-white hover:ring-primary-600 transition-all duration-200 rounded-md" data-v-3c2fe1ca><i class="ti ti-chevron-left text-xl" data-v-3c2fe1ca></i></button><button class="button-next px-3 py-1 bg-white ring-1 ring-gray-200 bg-white text-primary-600 hover:bg-primary-600 hover:text-white hover:ring-primary-600 transition-all duration-200 rounded-md" data-v-3c2fe1ca><i class="ti ti-chevron-right text-xl" data-v-3c2fe1ca></i></button></div><div data-v-3c2fe1ca><div class="swiper-pagination" data-v-3c2fe1ca></div></div></div></div><div class="text-center mt-8" data-v-3c2fe1ca>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("wisata"),
        class: "inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.__t("common.view_all"))} <i class="ti ti-arrow-right ml-2" data-v-3c2fe1ca${_scopeId}></i>`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.__t("common.view_all")) + " ", 1),
              createVNode("i", { class: "ti ti-arrow-right ml-2" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PopularDestinationSection.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const PopularDestinationSection = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-3c2fe1ca"]]);
const _sfc_main$a = {
  __name: "CTAAjelSection",
  __ssrInlineRender: true,
  props: {
    __t: Function
  },
  setup(__props) {
    const newMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 bg-white" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-5 gap-6 items-center"><div class="md:col-span-3 col-span-5 text-center md:text-left"><h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">${__props.__t("home.ajelai.title") ?? ""}</h2><p class="text-md lg:text-lg text-gray-600 max-w-3xl mx-auto mb-8">${__props.__t("home.ajelai.description") ?? ""}</p>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("chatbot"),
        class: "inline-flex items-center px-6 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="ti ti-message-circle-search text-2xl mr-2 -ms-1"${_scopeId}></i>${ssrInterpolate(__props.__t("home.ajelai.button"))}`);
          } else {
            return [
              createVNode("i", { class: "ti ti-message-circle-search text-2xl mr-2 -ms-1" }),
              createTextVNode(toDisplayString(__props.__t("home.ajelai.button")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:col-span-2 col-span-5"><div class="relative"><img src="/assets/images/ajelai-full.png" alt="Ajel AI" class="w-full"><div class="flex gap-3 bg-white shadow-2xl rounded-lg p-4 absolute bottom-16 md:bottom-24 right-0"><input${ssrRenderAttr("value", newMessage.value)} type="text"${ssrRenderAttr("placeholder", __props.__t("chatbot.type_message"))} class="w-full px-4 py-2 border border-gray-300 text-sm md:text-lg rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"><button${ssrIncludeBooleanAttr(!newMessage.value.trim()) ? " disabled" : ""} class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"><i class="ti ti-send"></i></button></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CTAAjelSection.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "RegenciesSection",
  __ssrInlineRender: true,
  props: {
    kabupatens: Array,
    __t: Function
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 bg-gray-50" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">${ssrInterpolate(__props.__t("home.regencies_cities"))}</h2><p class="text-md lg:text-xl text-gray-600 max-w-3xl mx-auto">${ssrInterpolate(__props.__t("home.regencies_description"))}</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(__props.kabupatens.slice(0, 3), (kabupaten) => {
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("wisata", { kabupaten_id: kabupaten.id }),
          key: kabupaten.id,
          class: "group bg-white rounded-xl shadow-sm hover:shadow-lg hover:ring-2 hover:ring-primary-600 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden relative"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", "/storage/" + kabupaten.logo)}${ssrRenderAttr("alt", kabupaten.nama_kabupaten)} class="absolute -bottom-10 -right-16 group-hover:bottom-1 group-hover:-right-4 transition-all duration-300 z-0 opacity-10 group-hover:opacity-60"${_scopeId}><div class="p-6 relative z-10"${_scopeId}><h3 class="text-lg font-semibold text-gray-900 mb-4"${_scopeId}>${ssrInterpolate(kabupaten.nama_kabupaten)}</h3><p class="text-gray-600 mb-4"${_scopeId}>${ssrInterpolate(kabupaten.wisatas_count || 0)} ${ssrInterpolate(__props.__t("regencies.destinations_count"))}</p><p class="text-sm text-gray-500 mb-4"${_scopeId}> Temukan berbagai destinasi wisata biru di ${ssrInterpolate(kabupaten.nama_kabupaten)}. </p>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("wisata", { kabupaten_id: kabupaten.id }),
                class: "inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.__t("regencies.view_destinations"))} <i class="ti ti-arrow-right ml-1"${_scopeId2}></i>`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.__t("regencies.view_destinations")) + " ", 1),
                      createVNode("i", { class: "ti ti-arrow-right ml-1" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("img", {
                  src: "/storage/" + kabupaten.logo,
                  alt: kabupaten.nama_kabupaten,
                  class: "absolute -bottom-10 -right-16 group-hover:bottom-1 group-hover:-right-4 transition-all duration-300 z-0 opacity-10 group-hover:opacity-60"
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "p-6 relative z-10" }, [
                  createVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-4" }, toDisplayString(kabupaten.nama_kabupaten), 1),
                  createVNode("p", { class: "text-gray-600 mb-4" }, toDisplayString(kabupaten.wisatas_count || 0) + " " + toDisplayString(__props.__t("regencies.destinations_count")), 1),
                  createVNode("p", { class: "text-sm text-gray-500 mb-4" }, " Temukan berbagai destinasi wisata biru di " + toDisplayString(kabupaten.nama_kabupaten) + ". ", 1),
                  createVNode(unref(Link), {
                    href: _ctx.route("wisata", { kabupaten_id: kabupaten.id }),
                    class: "inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.__t("regencies.view_destinations")) + " ", 1),
                      createVNode("i", { class: "ti ti-arrow-right ml-1" })
                    ]),
                    _: 2
                  }, 1032, ["href"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="text-center mt-8">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("kabupaten"),
        class: "inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.__t("common.view_all"))} <i class="ti ti-arrow-right ml-2"${_scopeId}></i>`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.__t("common.view_all")) + " ", 1),
              createVNode("i", { class: "ti ti-arrow-right ml-2" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/RegenciesSection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "StatsSection",
  __ssrInlineRender: true,
  props: {
    kabupatens: Array,
    wisatas: Array,
    __t: Function
  },
  setup(__props) {
    const props = __props;
    const averageRating = computed(() => {
      if (!props.wisatas || props.wisatas.length === 0) return "0.0";
      const total = props.wisatas.reduce((sum, wisata) => sum + parseFloat(wisata.rating), 0);
      return (total / props.wisatas.length).toFixed(1);
    });
    const stats = ref([
      {
        title: props.__t("home.stats.regencies"),
        icon: "ti ti-building-community",
        value: props.kabupatens.length
      },
      {
        title: props.__t("home.stats.destinations"),
        icon: "ti ti-map",
        value: props.wisatas.length
      },
      {
        title: props.__t("home.stats.average_rating"),
        icon: "ti ti-star",
        value: averageRating.value
      },
      {
        title: props.__t("home.stats.visitors"),
        icon: "ti ti-users",
        value: "10K+"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-12 bg-primary-600 relative overflow-hidden" }, _attrs))}><div class="absolute top-0 left-0 w-full h-full bg-[url(&#39;/assets/images/bg-pattern.png&#39;)] z-0 opacity-5"></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"><!--[-->`);
      ssrRenderList(stats.value, (stat) => {
        _push(`<div class="group text-center bg-white/10 hover:bg-white px-4 py-6 rounded-lg cursor-pointer transition-all duration-300"><div class="w-16 h-16 bg-white group-hover:bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4"><i class="${ssrRenderClass([stat.icon, "text-primary-600 group-hover:text-white text-2xl"])}"></i></div><div class="text-3xl font-bold text-white group-hover:text-gray-900 mb-2">${ssrInterpolate(stat.value)}</div><div class="text-gray-200 group-hover:text-gray-600">${ssrInterpolate(stat.title)}</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/StatsSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "CTAAjelSection2",
  __ssrInlineRender: true,
  props: {
    __t: Function
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 bg-primary-600 text-white relative overflow-hidden" }, _attrs))}><div class="absolute top-0 left-0 w-full h-full bg-[url(&#39;/assets/images/bg-pattern.png&#39;)] z-0 opacity-5"></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"><div class="max-w-3xl mx-auto"><h2 class="text-3xl lg:text-4xl font-bold mb-4">${ssrInterpolate(__props.__t("home.need_help_planning"))}</h2><p class="text-md lg:text-xl text-blue-100 mb-8">${ssrInterpolate(__props.__t("home.jelambu_description"))}</p>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("chatbot"),
        class: "inline-flex items-center px-5 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-10 h-10 mr-2 -ms-1"${_scopeId}><img${ssrRenderAttr("src", "/assets/images/ajelai.png")} alt="" class="w-full"${_scopeId}></div> ${ssrInterpolate(__props.__t("home.chat_with_jelambu"))}`);
          } else {
            return [
              createVNode("div", { class: "w-10 h-10 mr-2 -ms-1" }, [
                createVNode("img", {
                  src: "/assets/images/ajelai.png",
                  alt: "",
                  class: "w-full"
                })
              ]),
              createTextVNode(" " + toDisplayString(__props.__t("home.chat_with_jelambu")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center justify-center space-x-8 mt-8 text-blue-100"><div class="flex items-center space-x-2"><i class="ti ti-clock text-white text-lg"></i><span>${ssrInterpolate(__props.__t("home.available_24_7"))}</span></div><div class="flex items-center space-x-2"><i class="ti ti-world text-white text-lg"></i><span>${ssrInterpolate(__props.__t("home.multi_language"))}</span></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CTAAjelSection2.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "ScrapeSection",
  __ssrInlineRender: true,
  props: {
    __t: Function,
    destinations: Array
  },
  setup(__props) {
    const props = __props;
    const swiperContainer = ref(null);
    ref(null);
    const searchQuery = ref("");
    const showDropdown = ref(false);
    const sampleComments = [
      {
        user: "backpacker_id",
        text: "Pulau Pahawang tuh indah banget! Airnya bening dan cocok buat snorkeling 🌊✨"
      },
      {
        user: "dolanlampung",
        text: "Teluk Kiluan pas sunrise itu juara banget vibes-nya 🔥"
      },
      {
        user: "jelajah_nusantara",
        text: "Baru dari Tanjung Setia, ombaknya keren buat surfing 🏄‍♂️!"
      },
      {
        user: "traveling_id",
        text: "Pantai Pasir Putih di Lampung Selatan tuh mantap! Pasir putihnya mirip seperti di Bali 😍"
      },
      {
        user: "wisata_lampung",
        text: "Lampung Selatan punya Pantai Klara yang kece! Airnya jernih dan banyak spot foto yang instagrammable 📸"
      }
    ];
    const filteredList = computed(() => {
      if (!searchQuery.value) return [];
      return props.destinations.filter(
        (item) => item.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
    onMounted(() => {
      if (swiperContainer.value) {
        new Swiper(swiperContainer.value, {
          modules: [Autoplay],
          loop: true,
          autoplay: { delay: 3e3 },
          grabCursor: true,
          direction: "vertical",
          slidesPerView: 3,
          spaceBetween: 14
        });
      }
      document.addEventListener("click", handleClickOutside);
    });
    const dropdownRef = ref(null);
    function handleClickOutside(e2) {
      if (dropdownRef.value && !dropdownRef.value.contains(e2.target)) {
        showDropdown.value = false;
      }
    }
    onBeforeUnmount(() => {
      document.removeEventListener("click", handleClickOutside);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 bg-gray-50" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-16 items-center"><div class="col-span-5 md:col-span-2 relative"><div class="swiper h-96 overflow-hidden px-1"><div class="swiper-wrapper"><!--[-->`);
      ssrRenderList(sampleComments, (comment, index) => {
        _push(`<div class="swiper-slide bg-white rounded-lg p-5 shadow-sm flex gap-3"><img${ssrRenderAttr("src", `https://ui-avatars.com/api/?name=${comment.user}&background=2371ED&color=fff`)} alt="user" class="w-10 h-10 rounded-full"><p class="text-sm text-gray-800"><span class="font-semibold text-primary-600">@${ssrInterpolate(comment.user)}</span><br>${ssrInterpolate(comment.text)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="absolute z-10 top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none"></div><div class="absolute z-10 bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div></div><div class="col-span-5 md:col-span-3 text-center md:text-left"><h2 class="text-3xl font-bold text-gray-900 mb-4">${ssrInterpolate(__props.__t("home.scrape.title"))}</h2><p class="text-md md:text-lg text-gray-600 max-w-3xl mx-auto mb-6">${ssrInterpolate(__props.__t("home.scrape.description"))}</p><div class="flex flex-col sm:flex-row gap-4"><div class="relative w-full"><input type="text"${ssrRenderAttr("value", searchQuery.value)}${ssrRenderAttr("placeholder", __props.__t("home.scrape.placeholder"))} class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"><ul style="${ssrRenderStyle(showDropdown.value && filteredList.value.length ? null : { display: "none" })}" class="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-40 overflow-auto"><!--[-->`);
      ssrRenderList(filteredList.value, (item, index) => {
        _push(`<li class="px-4 py-2 hover:bg-primary-100 hover:text-primary-800 cursor-pointer">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div><button class="text-nowrap flex items-center bg-primary-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-primary-700 transition duration-200"><i class="ti ti-search mr-2"></i> ${ssrInterpolate(__props.__t("home.scrape.button"))}</button></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ScrapeSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Beranda",
  __ssrInlineRender: true,
  props: {
    kabupatens: Array,
    wisatas: Array,
    currentLang: String,
    destinations: Array
  },
  setup(__props) {
    const page = usePage();
    const __t = (key) => {
      const translations = page.props.translations || {};
      return key.split(".").reduce((obj, part) => obj && obj[part], translations) || key;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$d, mergeProps({ "current-lang": __props.currentLang }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Jelajah Lampung Biru" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(HeroSection, { __t }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$a, { __t }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              destinations: __props.destinations,
              __t
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, {
              kabupatens: __props.kabupatens,
              wisatas: __props.wisatas,
              __t
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$9, {
              kabupatens: __props.kabupatens,
              __t
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(PopularDestinationSection, {
              wisatas: __props.wisatas,
              __t
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, { __t }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Head), { title: "Jelajah Lampung Biru" }),
              createVNode(HeroSection, { __t }),
              createVNode(_sfc_main$a, { __t }),
              createVNode(_sfc_main$6, {
                destinations: __props.destinations,
                __t
              }, null, 8, ["destinations"]),
              createVNode(_sfc_main$8, {
                kabupatens: __props.kabupatens,
                wisatas: __props.wisatas,
                __t
              }, null, 8, ["kabupatens", "wisatas"]),
              createVNode(_sfc_main$9, {
                kabupatens: __props.kabupatens,
                __t
              }, null, 8, ["kabupatens"]),
              createVNode(PopularDestinationSection, {
                wisatas: __props.wisatas,
                __t
              }, null, 8, ["wisatas"]),
              createVNode(_sfc_main$7, { __t })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Beranda.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __name: "Chatbot",
  __ssrInlineRender: true,
  props: {
    currentLang: String
  },
  setup(__props) {
    const page = usePage();
    const chatContainer = ref(null);
    const newMessage = ref("");
    const isTyping = ref(false);
    const messages = ref([]);
    onMounted(async () => {
      const savedMessages = localStorage.getItem("ajel_chat");
      if (savedMessages) {
        messages.value = JSON.parse(savedMessages);
      }
      const query = new URLSearchParams(window.location.search);
      const incomingMessage = query.get("message");
      if (incomingMessage) {
        newMessage.value = incomingMessage;
        await sendMessage();
        history.replaceState({}, document.title, window.location.pathname);
      }
    });
    watch(messages, (newVal) => {
      localStorage.setItem("ajel_chat", JSON.stringify(newVal));
    }, { deep: true });
    const clearChat = () => {
      messages.value = [];
      localStorage.removeItem("ajel_chat");
    };
    const __t = (key) => {
      const translations = page.props.translations || {};
      return key.split(".").reduce((obj, part) => obj && obj[part], translations) || key;
    };
    const currentTime = computed(() => {
      return (/* @__PURE__ */ new Date()).toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit"
      });
    });
    const quickQuestions = computed(() => [
      __t("chatbot.quick_questions_list.destinations"),
      __t("chatbot.quick_questions_list.pahawang"),
      __t("chatbot.quick_questions_list.dolphins"),
      __t("chatbot.quick_questions_list.snorkeling")
    ]);
    const sendMessage = async () => {
      if (!newMessage.value.trim()) return;
      const userMessage = {
        id: Date.now(),
        text: newMessage.value,
        isUser: true,
        time: currentTime.value
      };
      messages.value.push(userMessage);
      const question = newMessage.value;
      newMessage.value = "";
      isTyping.value = true;
      await scrollToBottom();
      try {
        const reply = await getAIResponse(question);
        messages.value.push({
          id: Date.now() + 1,
          text: reply,
          isUser: false,
          time: currentTime.value
        });
        await scrollToBottom();
      } finally {
        isTyping.value = false;
      }
    };
    const sendQuickQuestion = (question) => {
      newMessage.value = question;
      sendMessage();
    };
    const getAIResponse = async (question) => {
      try {
        const response = await axios.post("/chatbot/chat", { message: question });
        return response.data.reply;
      } catch (error) {
        if (error.response.status === 429) {
          return "Maaf, Anda telah mencapai batas 3 pertanyaan per menit. Coba beberapa saat lagi ya 😊";
        } else {
          return "Maaf, saya tidak bisa memproses pertanyaan Anda saat ini. Coba beberapa saat lagi ya 😊";
        }
      }
    };
    const scrollToBottom = async () => {
      await nextTick();
      if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$d, mergeProps({ "current-lang": __props.currentLang }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), {
              title: __t("nav.chatbot")
            }, null, _parent2, _scopeId));
            _push2(`<section class="bg-primary-600 text-white py-16 relative overflow-hidden mt-20"${_scopeId}><div class="absolute top-0 left-0 w-full h-full bg-[url(&#39;/assets/images/bg-pattern.png&#39;)] z-0 opacity-10"${_scopeId}></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative"${_scopeId}><div class="w-24 h-24 ring-4 ring-white bg-white rounded-full flex items-center justify-center mx-auto mb-6"${_scopeId}><img${ssrRenderAttr("src", "/assets/images/ajelai.png")} alt="" class="w-full"${_scopeId}></div><h1 class="text-4xl lg:text-5xl font-bold mb-4"${_scopeId}>${ssrInterpolate(__t("chatbot.title"))}</h1><p class="text-md lg:text-xl text-blue-100 max-w-3xl mx-auto"${_scopeId}>${ssrInterpolate(__t("chatbot.description"))}</p></div></section><section class="py-12 bg-gray-50"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="bg-white rounded-xl shadow-lg overflow-hidden"${_scopeId}><div class="bg-primary-600 text-white p-4"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="w-10 h-10 ring-2 ring-white bg-white rounded-full flex items-center justify-center"${_scopeId}><img${ssrRenderAttr("src", "/assets/images/ajelai.png")} alt="" class="w-full"${_scopeId}></div><div class="truncate"${_scopeId}><h3 class="font-semibold"${_scopeId}>Ajel AI</h3><p class="text-sm text-blue-100"${_scopeId}>${ssrInterpolate(__t("chatbot.travel_assistant"))}</p></div><div class="ml-auto flex items-center space-x-2"${_scopeId}><div class="w-2 h-2 bg-green-400 rounded-full"${_scopeId}></div><span class="text-sm"${_scopeId}>${ssrInterpolate(__t("common.online"))}</span>`);
            if (messages.value.length > 0) {
              _push2(`<button class="py-2 px-3 text-sm text-white bg-red-500 rounded-lg"${_scopeId}><i class="ti ti-trash"${_scopeId}></i></button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="h-96 overflow-y-auto p-4 space-y-4"${_scopeId}><div class="flex items-start gap-3"${_scopeId}><div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0"${_scopeId}><img${ssrRenderAttr("src", "/assets/images/ajelai.png")} alt="" class="w-full"${_scopeId}></div><div class="bg-gray-100 rounded-lg p-3 max-w-xs lg:max-w-md"${_scopeId}><p class="text-gray-800 text-sm sm:text-base"${_scopeId}>${ssrInterpolate(__t("chatbot.ready_to_help"))}</p><p class="text-xs text-gray-500 mt-1"${_scopeId}>${ssrInterpolate(currentTime.value)}</p></div></div><!--[-->`);
            ssrRenderList(messages.value, (message) => {
              _push2(`<div class="${ssrRenderClass([{ "flex-row-reverse space-x-reverse": message.isUser }, "flex items-start space-x-3"])}"${_scopeId}><div class="${ssrRenderClass([message.isUser ? "bg-primary-600" : "bg-primary-100", "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"])}"${_scopeId}>`);
              if (message.isUser) {
                _push2(`<i class="text-sm ti ti-user text-white"${_scopeId}></i>`);
              } else {
                _push2(`<img${ssrRenderAttr("src", "/assets/images/ajelai.png")} alt="" class="w-full"${_scopeId}>`);
              }
              _push2(`</div><div class="${ssrRenderClass([message.isUser ? "bg-primary-600 text-white max-w-xs lg:max-w-md" : "bg-gray-100 text-gray-800", "rounded-lg p-3"])}"${_scopeId}><div class="text-sm sm:text-base chat-message"${_scopeId}>${message.text ?? ""}</div><p class="${ssrRenderClass([message.isUser ? "text-blue-100" : "text-gray-500", "text-xs mt-1"])}"${_scopeId}>${ssrInterpolate(message.time)}</p></div></div>`);
            });
            _push2(`<!--]-->`);
            if (isTyping.value) {
              _push2(`<div class="flex items-start space-x-3"${_scopeId}><div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0"${_scopeId}><img${ssrRenderAttr("src", "/assets/images/ajelai.png")} alt="" class="w-full"${_scopeId}></div><div class="bg-gray-100 rounded-lg p-3"${_scopeId}><div class="flex space-x-1"${_scopeId}><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"${_scopeId}></div><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="${ssrRenderStyle({ "animation-delay": "0.1s" })}"${_scopeId}></div><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}"${_scopeId}></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="p-4 border-t border-gray-200"${_scopeId}><p class="text-sm text-gray-600 mb-3"${_scopeId}>${ssrInterpolate(__t("chatbot.quick_questions"))}</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(quickQuestions.value, (question) => {
              _push2(`<button class="text-start px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"${_scopeId}>${ssrInterpolate(question)}</button>`);
            });
            _push2(`<!--]--></div></div><div class="p-4 border-t border-gray-200"${_scopeId}><div class="flex gap-3"${_scopeId}><input${ssrRenderAttr("value", newMessage.value)} type="text"${ssrRenderAttr("placeholder", __t("chatbot.type_message"))} class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"${_scopeId}><button${ssrIncludeBooleanAttr(!newMessage.value.trim()) ? " disabled" : ""} class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"${_scopeId}><i class="ti ti-send"${_scopeId}></i></button></div></div></div></div></section><section class="py-16 bg-white"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="text-center mb-12"${_scopeId}><h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"${_scopeId}>${ssrInterpolate(__t("chatbot.what_can_ask"))}</h2><p class="text-md lg:text-xl text-gray-600 max-w-3xl mx-auto"${_scopeId}>${ssrInterpolate(__t("chatbot.ai_description"))}</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"${_scopeId}><div class="text-center p-6 bg-gray-50 rounded-xl"${_scopeId}><div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"${_scopeId}><i class="ti ti-map-pin text-primary-600 text-2xl"${_scopeId}></i></div><h3 class="text-lg font-semibold text-gray-900 mb-2"${_scopeId}>${ssrInterpolate(__t("chatbot.features.destinations.title"))}</h3><p class="text-gray-600 text-sm"${_scopeId}>${ssrInterpolate(__t("chatbot.features.destinations.description"))}</p></div><div class="text-center p-6 bg-gray-50 rounded-xl"${_scopeId}><div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"${_scopeId}><i class="ti ti-bulb text-primary-600 text-2xl"${_scopeId}></i></div><h3 class="text-lg font-semibold text-gray-900 mb-2"${_scopeId}>${ssrInterpolate(__t("chatbot.features.travel_tips.title"))}</h3><p class="text-gray-600 text-sm"${_scopeId}>${ssrInterpolate(__t("chatbot.features.travel_tips.description"))}</p></div><div class="text-center p-6 bg-gray-50 rounded-xl"${_scopeId}><div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"${_scopeId}><i class="ti ti-heart text-primary-600 text-2xl"${_scopeId}></i></div><h3 class="text-lg font-semibold text-gray-900 mb-2"${_scopeId}>${ssrInterpolate(__t("chatbot.features.recommendations.title"))}</h3><p class="text-gray-600 text-sm"${_scopeId}>${ssrInterpolate(__t("chatbot.features.recommendations.description"))}</p></div><div class="text-center p-6 bg-gray-50 rounded-xl"${_scopeId}><div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"${_scopeId}><i class="ti ti-info-circle text-primary-600 text-2xl"${_scopeId}></i></div><h3 class="text-lg font-semibold text-gray-900 mb-2"${_scopeId}>${ssrInterpolate(__t("chatbot.features.detailed_info.title"))}</h3><p class="text-gray-600 text-sm"${_scopeId}>${ssrInterpolate(__t("chatbot.features.detailed_info.description"))}</p></div></div></div></section>`);
          } else {
            return [
              createVNode(unref(Head), {
                title: __t("nav.chatbot")
              }, null, 8, ["title"]),
              createVNode("section", { class: "bg-primary-600 text-white py-16 relative overflow-hidden mt-20" }, [
                createVNode("div", { class: "absolute top-0 left-0 w-full h-full bg-[url('/assets/images/bg-pattern.png')] z-0 opacity-10" }),
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative" }, [
                  createVNode("div", { class: "w-24 h-24 ring-4 ring-white bg-white rounded-full flex items-center justify-center mx-auto mb-6" }, [
                    createVNode("img", {
                      src: "/assets/images/ajelai.png",
                      alt: "",
                      class: "w-full"
                    })
                  ]),
                  createVNode("h1", { class: "text-4xl lg:text-5xl font-bold mb-4" }, toDisplayString(__t("chatbot.title")), 1),
                  createVNode("p", { class: "text-md lg:text-xl text-blue-100 max-w-3xl mx-auto" }, toDisplayString(__t("chatbot.description")), 1)
                ])
              ]),
              createVNode("section", { class: "py-12 bg-gray-50" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white rounded-xl shadow-lg overflow-hidden" }, [
                    createVNode("div", { class: "bg-primary-600 text-white p-4" }, [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode("div", { class: "w-10 h-10 ring-2 ring-white bg-white rounded-full flex items-center justify-center" }, [
                          createVNode("img", {
                            src: "/assets/images/ajelai.png",
                            alt: "",
                            class: "w-full"
                          })
                        ]),
                        createVNode("div", { class: "truncate" }, [
                          createVNode("h3", { class: "font-semibold" }, "Ajel AI"),
                          createVNode("p", { class: "text-sm text-blue-100" }, toDisplayString(__t("chatbot.travel_assistant")), 1)
                        ]),
                        createVNode("div", { class: "ml-auto flex items-center space-x-2" }, [
                          createVNode("div", { class: "w-2 h-2 bg-green-400 rounded-full" }),
                          createVNode("span", { class: "text-sm" }, toDisplayString(__t("common.online")), 1),
                          messages.value.length > 0 ? (openBlock(), createBlock("button", {
                            key: 0,
                            onClick: clearChat,
                            class: "py-2 px-3 text-sm text-white bg-red-500 rounded-lg"
                          }, [
                            createVNode("i", { class: "ti ti-trash" })
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    createVNode("div", {
                      class: "h-96 overflow-y-auto p-4 space-y-4",
                      ref_key: "chatContainer",
                      ref: chatContainer
                    }, [
                      createVNode("div", { class: "flex items-start gap-3" }, [
                        createVNode("div", { class: "w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0" }, [
                          createVNode("img", {
                            src: "/assets/images/ajelai.png",
                            alt: "",
                            class: "w-full"
                          })
                        ]),
                        createVNode("div", { class: "bg-gray-100 rounded-lg p-3 max-w-xs lg:max-w-md" }, [
                          createVNode("p", { class: "text-gray-800 text-sm sm:text-base" }, toDisplayString(__t("chatbot.ready_to_help")), 1),
                          createVNode("p", { class: "text-xs text-gray-500 mt-1" }, toDisplayString(currentTime.value), 1)
                        ])
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(messages.value, (message) => {
                        return openBlock(), createBlock("div", {
                          key: message.id,
                          class: ["flex items-start space-x-3", { "flex-row-reverse space-x-reverse": message.isUser }]
                        }, [
                          createVNode("div", {
                            class: ["w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0", message.isUser ? "bg-primary-600" : "bg-primary-100"]
                          }, [
                            message.isUser ? (openBlock(), createBlock("i", {
                              key: 0,
                              class: "text-sm ti ti-user text-white"
                            })) : (openBlock(), createBlock("img", {
                              key: 1,
                              src: "/assets/images/ajelai.png",
                              alt: "",
                              class: "w-full"
                            }))
                          ], 2),
                          createVNode("div", {
                            class: ["rounded-lg p-3", message.isUser ? "bg-primary-600 text-white max-w-xs lg:max-w-md" : "bg-gray-100 text-gray-800"]
                          }, [
                            createVNode("div", {
                              class: "text-sm sm:text-base chat-message",
                              innerHTML: message.text
                            }, null, 8, ["innerHTML"]),
                            createVNode("p", {
                              class: ["text-xs mt-1", message.isUser ? "text-blue-100" : "text-gray-500"]
                            }, toDisplayString(message.time), 3)
                          ], 2)
                        ], 2);
                      }), 128)),
                      isTyping.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-start space-x-3"
                      }, [
                        createVNode("div", { class: "w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0" }, [
                          createVNode("img", {
                            src: "/assets/images/ajelai.png",
                            alt: "",
                            class: "w-full"
                          })
                        ]),
                        createVNode("div", { class: "bg-gray-100 rounded-lg p-3" }, [
                          createVNode("div", { class: "flex space-x-1" }, [
                            createVNode("div", { class: "w-2 h-2 bg-gray-400 rounded-full animate-bounce" }),
                            createVNode("div", {
                              class: "w-2 h-2 bg-gray-400 rounded-full animate-bounce",
                              style: { "animation-delay": "0.1s" }
                            }),
                            createVNode("div", {
                              class: "w-2 h-2 bg-gray-400 rounded-full animate-bounce",
                              style: { "animation-delay": "0.2s" }
                            })
                          ])
                        ])
                      ])) : createCommentVNode("", true)
                    ], 512),
                    createVNode("div", { class: "p-4 border-t border-gray-200" }, [
                      createVNode("p", { class: "text-sm text-gray-600 mb-3" }, toDisplayString(__t("chatbot.quick_questions")), 1),
                      createVNode("div", { class: "flex flex-wrap gap-2" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(quickQuestions.value, (question) => {
                          return openBlock(), createBlock("button", {
                            key: question,
                            onClick: ($event) => sendQuickQuestion(question),
                            class: "text-start px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
                          }, toDisplayString(question), 9, ["onClick"]);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "p-4 border-t border-gray-200" }, [
                      createVNode("div", { class: "flex gap-3" }, [
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => newMessage.value = $event,
                          onKeypress: withKeys(sendMessage, ["enter"]),
                          type: "text",
                          placeholder: __t("chatbot.type_message"),
                          class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        }, null, 40, ["onUpdate:modelValue", "placeholder"]), [
                          [vModelText, newMessage.value]
                        ]),
                        createVNode("button", {
                          onClick: sendMessage,
                          disabled: !newMessage.value.trim(),
                          class: "px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                        }, [
                          createVNode("i", { class: "ti ti-send" })
                        ], 8, ["disabled"])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("section", { class: "py-16 bg-white" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "text-center mb-12" }, [
                    createVNode("h2", { class: "text-3xl lg:text-4xl font-bold text-gray-900 mb-4" }, toDisplayString(__t("chatbot.what_can_ask")), 1),
                    createVNode("p", { class: "text-md lg:text-xl text-gray-600 max-w-3xl mx-auto" }, toDisplayString(__t("chatbot.ai_description")), 1)
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" }, [
                    createVNode("div", { class: "text-center p-6 bg-gray-50 rounded-xl" }, [
                      createVNode("div", { class: "w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4" }, [
                        createVNode("i", { class: "ti ti-map-pin text-primary-600 text-2xl" })
                      ]),
                      createVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-2" }, toDisplayString(__t("chatbot.features.destinations.title")), 1),
                      createVNode("p", { class: "text-gray-600 text-sm" }, toDisplayString(__t("chatbot.features.destinations.description")), 1)
                    ]),
                    createVNode("div", { class: "text-center p-6 bg-gray-50 rounded-xl" }, [
                      createVNode("div", { class: "w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4" }, [
                        createVNode("i", { class: "ti ti-bulb text-primary-600 text-2xl" })
                      ]),
                      createVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-2" }, toDisplayString(__t("chatbot.features.travel_tips.title")), 1),
                      createVNode("p", { class: "text-gray-600 text-sm" }, toDisplayString(__t("chatbot.features.travel_tips.description")), 1)
                    ]),
                    createVNode("div", { class: "text-center p-6 bg-gray-50 rounded-xl" }, [
                      createVNode("div", { class: "w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4" }, [
                        createVNode("i", { class: "ti ti-heart text-primary-600 text-2xl" })
                      ]),
                      createVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-2" }, toDisplayString(__t("chatbot.features.recommendations.title")), 1),
                      createVNode("p", { class: "text-gray-600 text-sm" }, toDisplayString(__t("chatbot.features.recommendations.description")), 1)
                    ]),
                    createVNode("div", { class: "text-center p-6 bg-gray-50 rounded-xl" }, [
                      createVNode("div", { class: "w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4" }, [
                        createVNode("i", { class: "ti ti-info-circle text-primary-600 text-2xl" })
                      ]),
                      createVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-2" }, toDisplayString(__t("chatbot.features.detailed_info.title")), 1),
                      createVNode("p", { class: "text-gray-600 text-sm" }, toDisplayString(__t("chatbot.features.detailed_info.description")), 1)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Chatbot.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  __name: "Kabupaten",
  __ssrInlineRender: true,
  props: {
    kabupatens: Array,
    currentLang: String
  },
  setup(__props) {
    const props = __props;
    const page = usePage();
    const searchQuery = ref("");
    const __t = (key) => {
      const translations = page.props.translations || {};
      return key.split(".").reduce((obj, part) => obj && obj[part], translations) || key;
    };
    const filteredKabupatens = computed(() => {
      if (!searchQuery.value) return props.kabupatens;
      return props.kabupatens.filter(
        (kabupaten) => kabupaten.nama_kabupaten.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$d, mergeProps({ "current-lang": __props.currentLang }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), {
              title: __t("nav.regencies")
            }, null, _parent2, _scopeId));
            _push2(`<section class="bg-primary-600 text-white py-16 relative overflow-hidden mt-20"${_scopeId}><div class="absolute top-0 left-0 w-full h-full bg-[url(&#39;/assets/images/bg-pattern.png&#39;)] z-0 opacity-10"${_scopeId}></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"${_scopeId}><h1 class="text-3xl lg:text-4xl font-bold mb-4"${_scopeId}>${ssrInterpolate(__t("regencies.title"))} ${ssrInterpolate(__t("regencies.subtitle"))}</h1><p class="text-md lg:text-xl text-blue-100 max-w-3xl mx-auto"${_scopeId}>${ssrInterpolate(__t("regencies.description"))}</p></div></section><section class="py-8 bg-white border-b border-gray-200"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex flex-col md:flex-row gap-4 items-center justify-between"${_scopeId}><div class="relative flex-1 max-w-md"${_scopeId}><i class="ti ti-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"${_scopeId}></i><input${ssrRenderAttr("value", searchQuery.value)} type="text"${ssrRenderAttr("placeholder", __t("regencies.search_placeholder"))} class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"${_scopeId}></div><div class="text-gray-600"${_scopeId}><span class="font-medium"${_scopeId}>${ssrInterpolate(filteredKabupatens.value.length)}</span> ${ssrInterpolate(__t("regencies.total_regencies"))}</div></div></div></section><section class="py-12 bg-gray-50"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}>`);
            if (filteredKabupatens.value.length === 0) {
              _push2(`<div class="text-center py-12"${_scopeId}><div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4"${_scopeId}><i class="ti ti-search text-gray-400 text-3xl"${_scopeId}></i></div><h3 class="text-xl font-semibold text-gray-900 mb-2"${_scopeId}>${ssrInterpolate(__t("common.no_results"))}</h3><p class="text-gray-600"${_scopeId}>${ssrInterpolate(__t("common.try_different_keywords"))}</p></div>`);
            } else {
              _push2(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"${_scopeId}><!--[-->`);
              ssrRenderList(filteredKabupatens.value, (kabupaten) => {
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("wisata", { kabupaten_id: kabupaten.id }),
                  key: kabupaten.id,
                  class: "bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="p-6"${_scopeId2}><div class="flex items-center justify-between mb-4"${_scopeId2}><div class="w-16 h-16 flex items-center justify-center"${_scopeId2}><img${ssrRenderAttr("src", "/storage/" + kabupaten.logo)} alt=""${_scopeId2}></div><div class="text-right"${_scopeId2}><div class="text-2xl font-bold text-primary-600"${_scopeId2}>${ssrInterpolate(kabupaten.wisatas_count || 0)}</div><div class="text-sm text-gray-500"${_scopeId2}>${ssrInterpolate(__t("regencies.destinations_count"))}</div></div></div><h3 class="text-xl font-semibold text-gray-900 mb-3"${_scopeId2}>${ssrInterpolate(kabupaten.nama_kabupaten)}</h3><p class="text-gray-600 mb-4"${_scopeId2}> Temukan berbagai destinasi wisata biru di ${ssrInterpolate(kabupaten.nama_kabupaten)}. </p><div class="flex items-center justify-between"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(Link), {
                        href: _ctx.route("wisata", { kabupaten_id: kabupaten.id }),
                        class: "inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(__t("regencies.view_destinations"))} <i class="ti ti-arrow-right ml-1"${_scopeId3}></i>`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(__t("regencies.view_destinations")) + " ", 1),
                              createVNode("i", { class: "ti ti-arrow-right ml-1" })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`<button class="p-2 text-gray-400 hover:text-primary-600 transition-colors duration-200"${_scopeId2}><i class="ti ti-info-circle"${_scopeId2}></i></button></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "p-6" }, [
                          createVNode("div", { class: "flex items-center justify-between mb-4" }, [
                            createVNode("div", { class: "w-16 h-16 flex items-center justify-center" }, [
                              createVNode("img", {
                                src: "/storage/" + kabupaten.logo,
                                alt: ""
                              }, null, 8, ["src"])
                            ]),
                            createVNode("div", { class: "text-right" }, [
                              createVNode("div", { class: "text-2xl font-bold text-primary-600" }, toDisplayString(kabupaten.wisatas_count || 0), 1),
                              createVNode("div", { class: "text-sm text-gray-500" }, toDisplayString(__t("regencies.destinations_count")), 1)
                            ])
                          ]),
                          createVNode("h3", { class: "text-xl font-semibold text-gray-900 mb-3" }, toDisplayString(kabupaten.nama_kabupaten), 1),
                          createVNode("p", { class: "text-gray-600 mb-4" }, " Temukan berbagai destinasi wisata biru di " + toDisplayString(kabupaten.nama_kabupaten) + ". ", 1),
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode(unref(Link), {
                              href: _ctx.route("wisata", { kabupaten_id: kabupaten.id }),
                              class: "inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(__t("regencies.view_destinations")) + " ", 1),
                                createVNode("i", { class: "ti ti-arrow-right ml-1" })
                              ]),
                              _: 2
                            }, 1032, ["href"]),
                            createVNode("button", { class: "p-2 text-gray-400 hover:text-primary-600 transition-colors duration-200" }, [
                              createVNode("i", { class: "ti ti-info-circle" })
                            ])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            }
            _push2(`</div></section><section class="py-16 bg-primary-600 text-white relative overflow-hidden"${_scopeId}><div class="absolute top-0 left-0 w-full h-full bg-[url(&#39;/assets/images/bg-pattern.png&#39;)] z-0 opacity-10"${_scopeId}></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"${_scopeId}><div class="max-w-3xl mx-auto"${_scopeId}><h2 class="text-3xl lg:text-4xl font-bold mb-4"${_scopeId}>${ssrInterpolate(__t("regencies.ready_to_explore"))}</h2><p class="text-md lg:text-xl text-blue-100 mb-8"${_scopeId}>${ssrInterpolate(__t("regencies.explore_description"))}</p>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("wisata"),
              class: "inline-flex items-center px-5 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="ti ti-compass mr-2 text-2xl"${_scopeId2}></i> ${ssrInterpolate(__t("regencies.explore_all_destinations"))}`);
                } else {
                  return [
                    createVNode("i", { class: "ti ti-compass mr-2 text-2xl" }),
                    createTextVNode(" " + toDisplayString(__t("regencies.explore_all_destinations")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></section>`);
          } else {
            return [
              createVNode(unref(Head), {
                title: __t("nav.regencies")
              }, null, 8, ["title"]),
              createVNode("section", { class: "bg-primary-600 text-white py-16 relative overflow-hidden mt-20" }, [
                createVNode("div", { class: "absolute top-0 left-0 w-full h-full bg-[url('/assets/images/bg-pattern.png')] z-0 opacity-10" }),
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" }, [
                  createVNode("h1", { class: "text-3xl lg:text-4xl font-bold mb-4" }, toDisplayString(__t("regencies.title")) + " " + toDisplayString(__t("regencies.subtitle")), 1),
                  createVNode("p", { class: "text-md lg:text-xl text-blue-100 max-w-3xl mx-auto" }, toDisplayString(__t("regencies.description")), 1)
                ])
              ]),
              createVNode("section", { class: "py-8 bg-white border-b border-gray-200" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex flex-col md:flex-row gap-4 items-center justify-between" }, [
                    createVNode("div", { class: "relative flex-1 max-w-md" }, [
                      createVNode("i", { class: "ti ti-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" }),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                        type: "text",
                        placeholder: __t("regencies.search_placeholder"),
                        class: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, searchQuery.value]
                      ])
                    ]),
                    createVNode("div", { class: "text-gray-600" }, [
                      createVNode("span", { class: "font-medium" }, toDisplayString(filteredKabupatens.value.length), 1),
                      createTextVNode(" " + toDisplayString(__t("regencies.total_regencies")), 1)
                    ])
                  ])
                ])
              ]),
              createVNode("section", { class: "py-12 bg-gray-50" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  filteredKabupatens.value.length === 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-center py-12"
                  }, [
                    createVNode("div", { class: "w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4" }, [
                      createVNode("i", { class: "ti ti-search text-gray-400 text-3xl" })
                    ]),
                    createVNode("h3", { class: "text-xl font-semibold text-gray-900 mb-2" }, toDisplayString(__t("common.no_results")), 1),
                    createVNode("p", { class: "text-gray-600" }, toDisplayString(__t("common.try_different_keywords")), 1)
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(filteredKabupatens.value, (kabupaten) => {
                      return openBlock(), createBlock(unref(Link), {
                        href: _ctx.route("wisata", { kabupaten_id: kabupaten.id }),
                        key: kabupaten.id,
                        class: "bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "p-6" }, [
                            createVNode("div", { class: "flex items-center justify-between mb-4" }, [
                              createVNode("div", { class: "w-16 h-16 flex items-center justify-center" }, [
                                createVNode("img", {
                                  src: "/storage/" + kabupaten.logo,
                                  alt: ""
                                }, null, 8, ["src"])
                              ]),
                              createVNode("div", { class: "text-right" }, [
                                createVNode("div", { class: "text-2xl font-bold text-primary-600" }, toDisplayString(kabupaten.wisatas_count || 0), 1),
                                createVNode("div", { class: "text-sm text-gray-500" }, toDisplayString(__t("regencies.destinations_count")), 1)
                              ])
                            ]),
                            createVNode("h3", { class: "text-xl font-semibold text-gray-900 mb-3" }, toDisplayString(kabupaten.nama_kabupaten), 1),
                            createVNode("p", { class: "text-gray-600 mb-4" }, " Temukan berbagai destinasi wisata biru di " + toDisplayString(kabupaten.nama_kabupaten) + ". ", 1),
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode(unref(Link), {
                                href: _ctx.route("wisata", { kabupaten_id: kabupaten.id }),
                                class: "inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(__t("regencies.view_destinations")) + " ", 1),
                                  createVNode("i", { class: "ti ti-arrow-right ml-1" })
                                ]),
                                _: 2
                              }, 1032, ["href"]),
                              createVNode("button", { class: "p-2 text-gray-400 hover:text-primary-600 transition-colors duration-200" }, [
                                createVNode("i", { class: "ti ti-info-circle" })
                              ])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["href"]);
                    }), 128))
                  ]))
                ])
              ]),
              createVNode("section", { class: "py-16 bg-primary-600 text-white relative overflow-hidden" }, [
                createVNode("div", { class: "absolute top-0 left-0 w-full h-full bg-[url('/assets/images/bg-pattern.png')] z-0 opacity-10" }),
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" }, [
                  createVNode("div", { class: "max-w-3xl mx-auto" }, [
                    createVNode("h2", { class: "text-3xl lg:text-4xl font-bold mb-4" }, toDisplayString(__t("regencies.ready_to_explore")), 1),
                    createVNode("p", { class: "text-md lg:text-xl text-blue-100 mb-8" }, toDisplayString(__t("regencies.explore_description")), 1),
                    createVNode(unref(Link), {
                      href: _ctx.route("wisata"),
                      class: "inline-flex items-center px-5 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    }, {
                      default: withCtx(() => [
                        createVNode("i", { class: "ti ti-compass mr-2 text-2xl" }),
                        createTextVNode(" " + toDisplayString(__t("regencies.explore_all_destinations")), 1)
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Kabupaten.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "Reviews",
  __ssrInlineRender: true,
  props: {
    currentLang: String,
    destinations: Object
  },
  setup(__props) {
    const props = __props;
    const page = usePage();
    const selectedWisata = ref(null);
    const searchQuery = ref("");
    const showDropdown = ref(false);
    const isLoading = ref(false);
    const comments = ref([]);
    const summary = ref(null);
    const errorMessage = ref(null);
    const __t = (key) => {
      const translations = page.props.translations || {};
      return key.split(".").reduce((obj, part) => obj && obj[part], translations) || key;
    };
    const filteredList = computed(() => {
      if (!searchQuery.value) return [];
      return props.destinations.filter(
        (item) => item.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
    const selectItem = (item) => {
      selectedWisata.value = item;
      searchQuery.value = item;
      showDropdown.value = false;
    };
    onMounted(async () => {
      document.addEventListener("click", handleClickOutside);
      const query = new URLSearchParams(window.location.search);
      const incomingQuery = query.get("query");
      if (incomingQuery) {
        selectedWisata.value = incomingQuery;
        searchQuery.value = incomingQuery;
        await telusuriKomentar();
        history.replaceState({}, document.title, window.location.pathname);
      }
    });
    const telusuriKomentar = async () => {
      if (selectedWisata.value) {
        try {
          isLoading.value = true;
          const response = await axios.post("/reviews/search-comments", { query: selectedWisata.value });
          comments.value = response.data.tweets;
          summary.value = response.data.summary;
        } catch (error) {
          if (error.response.status === 429) {
            errorMessage.value = "Maaf, Anda telah mencapai batas 3 scrape per menit. Coba beberapa saat lagi ya 😊";
          } else {
            errorMessage.value = "Maaf, terjadi kesalahan saat mencari komentar. Coba beberapa saat lagi ya 😊";
          }
        } finally {
          isLoading.value = false;
        }
      }
    };
    const dropdownRef = ref(null);
    const handleClickOutside = (e2) => {
      if (dropdownRef.value && !dropdownRef.value.contains(e2.target)) {
        showDropdown.value = false;
      }
    };
    onBeforeUnmount(() => {
      document.removeEventListener("click", handleClickOutside);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$d, mergeProps({ "current-lang": __props.currentLang }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), {
              title: __t("nav.reviews")
            }, null, _parent2, _scopeId));
            _push2(`<section class="bg-primary-600 text-white py-16 relative overflow-hidden mt-20"${_scopeId}><div class="absolute top-0 left-0 w-full h-full bg-[url(&#39;/assets/images/bg-pattern.png&#39;)] z-0 opacity-10"${_scopeId}></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"${_scopeId}><h1 class="text-3xl lg:text-4xl font-bold mb-4"${_scopeId}>${ssrInterpolate(__t("reviews.title"))}</h1><p class="text-md lg:text-xl text-blue-100 max-w-3xl mx-auto"${_scopeId}>${ssrInterpolate(__t("reviews.description"))}</p></div></section><section class="py-8 bg-white border-b border-gray-200"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex flex-col md:flex-row gap-4 items-center justify-between"${_scopeId}><div class="flex gap-4 max-w-2xl w-full"${_scopeId}><div class="relative w-full"${_scopeId}><input type="text"${ssrRenderAttr("value", searchQuery.value)}${ssrRenderAttr("placeholder", __t("reviews.placeholder"))} class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"${_scopeId}><ul style="${ssrRenderStyle(showDropdown.value && filteredList.value.length ? null : { display: "none" })}" class="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-40 overflow-auto"${_scopeId}><!--[-->`);
            ssrRenderList(filteredList.value, (item, index) => {
              _push2(`<li class="px-4 py-2 hover:bg-primary-100 hover:text-primary-800 cursor-pointer"${_scopeId}>${ssrInterpolate(item)}</li>`);
            });
            _push2(`<!--]--></ul></div><button${ssrIncludeBooleanAttr(isLoading.value || !selectedWisata.value) ? " disabled" : ""} class="disabled:opacity-50 text-nowrap bg-primary-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-primary-700 transition duration-200"${_scopeId}>`);
            if (isLoading.value) {
              _push2(`<span class="flex items-center"${_scopeId}><svg class="animate-spin sm:-ml-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"${_scopeId}></path></svg><span class="ml-3 hidden sm:block"${_scopeId}>${ssrInterpolate(__t("reviews.button_loading"))}</span></span>`);
            } else {
              _push2(`<span class="flex items-center"${_scopeId}><i class="ti ti-search sm:-ml-1"${_scopeId}></i><span class="ml-3 hidden sm:block"${_scopeId}>${ssrInterpolate(__t("reviews.button"))}</span></span>`);
            }
            _push2(`</button></div><div class="text-gray-600"${_scopeId}><span class="font-medium"${_scopeId}>${ssrInterpolate(comments.value.length)}</span> ${ssrInterpolate(__t("reviews.tweets_found"))}</div></div></div></section><section class="py-12 bg-gray-50"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}>`);
            if (comments.value.length === 0) {
              _push2(`<div class="text-center py-12"${_scopeId}><div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4"${_scopeId}><i class="ti ti-search text-gray-400 text-3xl"${_scopeId}></i></div><h3 class="text-xl font-semibold text-gray-900 mb-2"${_scopeId}>${ssrInterpolate(__t("reviews.not_found.title"))}</h3><p class="text-gray-600"${_scopeId}>${ssrInterpolate(__t("reviews.not_found.description"))}</p></div>`);
            } else if (isLoading.value) {
              _push2(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"${_scopeId}><div class="bg-white shadow-sm rounded-lg p-4"${_scopeId}><div class="animate-pulse flex space-x-4"${_scopeId}><div class="rounded-full bg-slate-300 h-10 w-10"${_scopeId}></div><div class="flex-1 space-y-6 py-1"${_scopeId}><div class="h-2 bg-slate-300 rounded w-28"${_scopeId}></div><div class="space-y-3"${_scopeId}><div class="grid grid-cols-3 gap-4"${_scopeId}><div class="h-2 bg-slate-300 rounded col-span-2"${_scopeId}></div><div class="h-2 bg-slate-300 rounded col-span-1"${_scopeId}></div></div><div class="h-2 bg-slate-300 rounded"${_scopeId}></div></div><div class="h-2 bg-slate-300 rounded w-40"${_scopeId}></div></div></div></div><div class="bg-white shadow-sm rounded-lg p-4"${_scopeId}><div class="animate-pulse flex space-x-4"${_scopeId}><div class="rounded-full bg-slate-300 h-10 w-10"${_scopeId}></div><div class="flex-1 space-y-6 py-1"${_scopeId}><div class="h-2 bg-slate-300 rounded w-28"${_scopeId}></div><div class="space-y-3"${_scopeId}><div class="grid grid-cols-3 gap-4"${_scopeId}><div class="h-2 bg-slate-300 rounded col-span-2"${_scopeId}></div><div class="h-2 bg-slate-300 rounded col-span-1"${_scopeId}></div></div><div class="h-2 bg-slate-300 rounded"${_scopeId}></div></div><div class="h-2 bg-slate-300 rounded w-40"${_scopeId}></div></div></div></div><div class="bg-white shadow-sm rounded-lg p-4"${_scopeId}><div class="animate-pulse flex space-x-4"${_scopeId}><div class="rounded-full bg-slate-300 h-10 w-10"${_scopeId}></div><div class="flex-1 space-y-6 py-1"${_scopeId}><div class="h-2 bg-slate-300 rounded w-28"${_scopeId}></div><div class="space-y-3"${_scopeId}><div class="grid grid-cols-3 gap-4"${_scopeId}><div class="h-2 bg-slate-300 rounded col-span-2"${_scopeId}></div><div class="h-2 bg-slate-300 rounded col-span-1"${_scopeId}></div></div><div class="h-2 bg-slate-300 rounded"${_scopeId}></div></div><div class="h-2 bg-slate-300 rounded w-40"${_scopeId}></div></div></div></div></div>`);
            } else {
              _push2(`<div${_scopeId}><div class="columns-1 md:columns-2 lg:columns-3 gap-4 mb-8"${_scopeId}><!--[-->`);
              ssrRenderList(comments.value, (comment, index) => {
                _push2(`<div class="bg-white rounded-lg p-4 shadow-sm mb-4 break-inside-avoid"${_scopeId}><div class="flex gap-4"${_scopeId}><img${ssrRenderAttr("src", comment.profile_image)} alt="user" class="w-10 h-10 rounded-full"${_scopeId}><div${_scopeId}><p class="font-semibold text-primary-600 mb-2"${_scopeId}>@${ssrInterpolate(comment.username)}</p><p class="text-sm text-gray-800 mb-3"${_scopeId}>${ssrInterpolate(comment.text)}</p><small class="block mt-3 text-gray-600"${_scopeId}>${ssrInterpolate(comment.created_at)}</small></div></div></div>`);
              });
              _push2(`<!--]--></div><div class="bg-white p-5 shadow-sm rounded-lg"${_scopeId}><h3 class="text-lg font-semibold text-gray-900 mb-2"${_scopeId}>${ssrInterpolate(__t("reviews.summary"))}</h3><div class="text-md summary-text"${_scopeId}>${summary.value ?? ""}</div></div></div>`);
            }
            _push2(`</div></section>`);
          } else {
            return [
              createVNode(unref(Head), {
                title: __t("nav.reviews")
              }, null, 8, ["title"]),
              createVNode("section", { class: "bg-primary-600 text-white py-16 relative overflow-hidden mt-20" }, [
                createVNode("div", { class: "absolute top-0 left-0 w-full h-full bg-[url('/assets/images/bg-pattern.png')] z-0 opacity-10" }),
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" }, [
                  createVNode("h1", { class: "text-3xl lg:text-4xl font-bold mb-4" }, toDisplayString(__t("reviews.title")), 1),
                  createVNode("p", { class: "text-md lg:text-xl text-blue-100 max-w-3xl mx-auto" }, toDisplayString(__t("reviews.description")), 1)
                ])
              ]),
              createVNode("section", { class: "py-8 bg-white border-b border-gray-200" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex flex-col md:flex-row gap-4 items-center justify-between" }, [
                    createVNode("div", { class: "flex gap-4 max-w-2xl w-full" }, [
                      createVNode("div", {
                        class: "relative w-full",
                        ref_key: "dropdownRef",
                        ref: dropdownRef
                      }, [
                        withDirectives(createVNode("input", {
                          type: "text",
                          "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                          onFocus: ($event) => showDropdown.value = true,
                          onInput: ($event) => showDropdown.value = true,
                          placeholder: __t("reviews.placeholder"),
                          class: "w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                        }, null, 40, ["onUpdate:modelValue", "onFocus", "onInput", "placeholder"]), [
                          [vModelText, searchQuery.value]
                        ]),
                        withDirectives(createVNode("ul", { class: "absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-40 overflow-auto" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(filteredList.value, (item, index) => {
                            return openBlock(), createBlock("li", {
                              key: index,
                              onClick: ($event) => selectItem(item),
                              class: "px-4 py-2 hover:bg-primary-100 hover:text-primary-800 cursor-pointer"
                            }, toDisplayString(item), 9, ["onClick"]);
                          }), 128))
                        ], 512), [
                          [vShow, showDropdown.value && filteredList.value.length]
                        ])
                      ], 512),
                      createVNode("button", {
                        onClick: telusuriKomentar,
                        disabled: isLoading.value || !selectedWisata.value,
                        class: "disabled:opacity-50 text-nowrap bg-primary-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-primary-700 transition duration-200"
                      }, [
                        isLoading.value ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "flex items-center"
                        }, [
                          (openBlock(), createBlock("svg", {
                            class: "animate-spin sm:-ml-1 h-5 w-5 text-white",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("circle", {
                              class: "opacity-25",
                              cx: "12",
                              cy: "12",
                              r: "10",
                              stroke: "currentColor",
                              "stroke-width": "4"
                            }),
                            createVNode("path", {
                              class: "opacity-75",
                              fill: "currentColor",
                              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            })
                          ])),
                          createVNode("span", { class: "ml-3 hidden sm:block" }, toDisplayString(__t("reviews.button_loading")), 1)
                        ])) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "flex items-center"
                        }, [
                          createVNode("i", { class: "ti ti-search sm:-ml-1" }),
                          createVNode("span", { class: "ml-3 hidden sm:block" }, toDisplayString(__t("reviews.button")), 1)
                        ]))
                      ], 8, ["disabled"])
                    ]),
                    createVNode("div", { class: "text-gray-600" }, [
                      createVNode("span", { class: "font-medium" }, toDisplayString(comments.value.length), 1),
                      createTextVNode(" " + toDisplayString(__t("reviews.tweets_found")), 1)
                    ])
                  ])
                ])
              ]),
              createVNode("section", { class: "py-12 bg-gray-50" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  comments.value.length === 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-center py-12"
                  }, [
                    createVNode("div", { class: "w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4" }, [
                      createVNode("i", { class: "ti ti-search text-gray-400 text-3xl" })
                    ]),
                    createVNode("h3", { class: "text-xl font-semibold text-gray-900 mb-2" }, toDisplayString(__t("reviews.not_found.title")), 1),
                    createVNode("p", { class: "text-gray-600" }, toDisplayString(__t("reviews.not_found.description")), 1)
                  ])) : isLoading.value ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  }, [
                    createVNode("div", { class: "bg-white shadow-sm rounded-lg p-4" }, [
                      createVNode("div", { class: "animate-pulse flex space-x-4" }, [
                        createVNode("div", { class: "rounded-full bg-slate-300 h-10 w-10" }),
                        createVNode("div", { class: "flex-1 space-y-6 py-1" }, [
                          createVNode("div", { class: "h-2 bg-slate-300 rounded w-28" }),
                          createVNode("div", { class: "space-y-3" }, [
                            createVNode("div", { class: "grid grid-cols-3 gap-4" }, [
                              createVNode("div", { class: "h-2 bg-slate-300 rounded col-span-2" }),
                              createVNode("div", { class: "h-2 bg-slate-300 rounded col-span-1" })
                            ]),
                            createVNode("div", { class: "h-2 bg-slate-300 rounded" })
                          ]),
                          createVNode("div", { class: "h-2 bg-slate-300 rounded w-40" })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "bg-white shadow-sm rounded-lg p-4" }, [
                      createVNode("div", { class: "animate-pulse flex space-x-4" }, [
                        createVNode("div", { class: "rounded-full bg-slate-300 h-10 w-10" }),
                        createVNode("div", { class: "flex-1 space-y-6 py-1" }, [
                          createVNode("div", { class: "h-2 bg-slate-300 rounded w-28" }),
                          createVNode("div", { class: "space-y-3" }, [
                            createVNode("div", { class: "grid grid-cols-3 gap-4" }, [
                              createVNode("div", { class: "h-2 bg-slate-300 rounded col-span-2" }),
                              createVNode("div", { class: "h-2 bg-slate-300 rounded col-span-1" })
                            ]),
                            createVNode("div", { class: "h-2 bg-slate-300 rounded" })
                          ]),
                          createVNode("div", { class: "h-2 bg-slate-300 rounded w-40" })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "bg-white shadow-sm rounded-lg p-4" }, [
                      createVNode("div", { class: "animate-pulse flex space-x-4" }, [
                        createVNode("div", { class: "rounded-full bg-slate-300 h-10 w-10" }),
                        createVNode("div", { class: "flex-1 space-y-6 py-1" }, [
                          createVNode("div", { class: "h-2 bg-slate-300 rounded w-28" }),
                          createVNode("div", { class: "space-y-3" }, [
                            createVNode("div", { class: "grid grid-cols-3 gap-4" }, [
                              createVNode("div", { class: "h-2 bg-slate-300 rounded col-span-2" }),
                              createVNode("div", { class: "h-2 bg-slate-300 rounded col-span-1" })
                            ]),
                            createVNode("div", { class: "h-2 bg-slate-300 rounded" })
                          ]),
                          createVNode("div", { class: "h-2 bg-slate-300 rounded w-40" })
                        ])
                      ])
                    ])
                  ])) : (openBlock(), createBlock("div", { key: 2 }, [
                    createVNode("div", { class: "columns-1 md:columns-2 lg:columns-3 gap-4 mb-8" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(comments.value, (comment, index) => {
                        return openBlock(), createBlock("div", {
                          key: index,
                          class: "bg-white rounded-lg p-4 shadow-sm mb-4 break-inside-avoid"
                        }, [
                          createVNode("div", { class: "flex gap-4" }, [
                            createVNode("img", {
                              src: comment.profile_image,
                              alt: "user",
                              class: "w-10 h-10 rounded-full"
                            }, null, 8, ["src"]),
                            createVNode("div", null, [
                              createVNode("p", { class: "font-semibold text-primary-600 mb-2" }, "@" + toDisplayString(comment.username), 1),
                              createVNode("p", { class: "text-sm text-gray-800 mb-3" }, toDisplayString(comment.text), 1),
                              createVNode("small", { class: "block mt-3 text-gray-600" }, toDisplayString(comment.created_at), 1)
                            ])
                          ])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "bg-white p-5 shadow-sm rounded-lg" }, [
                      createVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-2" }, toDisplayString(__t("reviews.summary")), 1),
                      createVNode("div", {
                        innerHTML: summary.value,
                        class: "text-md summary-text"
                      }, null, 8, ["innerHTML"])
                    ])
                  ]))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reviews.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    wisatas: Array,
    kabupatens: Array,
    currentLang: String
  },
  setup(__props) {
    const props = __props;
    const page = usePage();
    const searchQuery = ref("");
    const selectedKabupaten = ref("");
    const sortBy = ref("rating");
    const __t = (key) => {
      const translations = page.props.translations || {};
      return key.split(".").reduce((obj, part) => obj && obj[part], translations) || key;
    };
    const filteredWisatas = computed(() => {
      let filtered = props.wisatas;
      if (searchQuery.value) {
        filtered = filtered.filter(
          (wisata) => wisata.nama.toLowerCase().includes(searchQuery.value.toLowerCase()) || wisata.lokasi.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      }
      if (selectedKabupaten.value) {
        filtered = filtered.filter(
          (wisata) => wisata.kabupaten_id == selectedKabupaten.value
        );
      }
      filtered.sort((a2, b2) => {
        switch (sortBy.value) {
          case "rating":
            return parseFloat(b2.rating) - parseFloat(a2.rating);
          case "name":
            return a2.nama.localeCompare(b2.nama);
          case "location":
            return a2.lokasi.localeCompare(b2.lokasi);
          default:
            return 0;
        }
      });
      return filtered;
    });
    const resetFilters = () => {
      searchQuery.value = "";
      selectedKabupaten.value = "";
      sortBy.value = "rating";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$d, mergeProps({ "current-lang": __props.currentLang }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), {
              title: __t("nav.destinations")
            }, null, _parent2, _scopeId));
            _push2(`<section class="bg-primary-600 text-white py-16 relative overflow-hidden mt-20"${_scopeId}><div class="absolute top-0 left-0 w-full h-full bg-[url(&#39;/assets/images/bg-pattern.png&#39;)] z-0 opacity-10"${_scopeId}></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"${_scopeId}><h1 class="text-3xl lg:text-4xl font-bold mb-4"${_scopeId}>${ssrInterpolate(__t("destinations.title"))} ${ssrInterpolate(__t("destinations.subtitle"))}</h1><p class="text-md lg:text-xl text-blue-100 max-w-3xl mx-auto"${_scopeId}>${ssrInterpolate(__t("destinations.description"))}</p></div></section><section class="py-8 bg-white border-b border-gray-200"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex flex-col lg:flex-row gap-4 items-center justify-between"${_scopeId}><div class="relative flex-1 max-w-md"${_scopeId}><i class="ti ti-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"${_scopeId}></i><input${ssrRenderAttr("value", searchQuery.value)} type="text"${ssrRenderAttr("placeholder", __t("destinations.search_placeholder"))} class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"${_scopeId}></div><div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"${_scopeId}><select class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(selectedKabupaten.value) ? ssrLooseContain(selectedKabupaten.value, "") : ssrLooseEqual(selectedKabupaten.value, "")) ? " selected" : ""}${_scopeId}>${ssrInterpolate(__t("destinations.all_regencies"))}</option><!--[-->`);
            ssrRenderList(__props.kabupatens, (kabupaten) => {
              _push2(`<option${ssrRenderAttr("value", kabupaten.id)}${ssrIncludeBooleanAttr(Array.isArray(selectedKabupaten.value) ? ssrLooseContain(selectedKabupaten.value, kabupaten.id) : ssrLooseEqual(selectedKabupaten.value, kabupaten.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(kabupaten.nama_kabupaten)}</option>`);
            });
            _push2(`<!--]--></select><select class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"${_scopeId}><option value="rating"${ssrIncludeBooleanAttr(Array.isArray(sortBy.value) ? ssrLooseContain(sortBy.value, "rating") : ssrLooseEqual(sortBy.value, "rating")) ? " selected" : ""}${_scopeId}>${ssrInterpolate(__t("destinations.highest_rating"))}</option><option value="name"${ssrIncludeBooleanAttr(Array.isArray(sortBy.value) ? ssrLooseContain(sortBy.value, "name") : ssrLooseEqual(sortBy.value, "name")) ? " selected" : ""}${_scopeId}>${ssrInterpolate(__t("destinations.name_a_z"))}</option><option value="location"${ssrIncludeBooleanAttr(Array.isArray(sortBy.value) ? ssrLooseContain(sortBy.value, "location") : ssrLooseEqual(sortBy.value, "location")) ? " selected" : ""}${_scopeId}>${ssrInterpolate(__t("destinations.location_a_z"))}</option></select></div></div><div class="mt-4 text-gray-600"${_scopeId}><span class="font-medium"${_scopeId}>${ssrInterpolate(filteredWisatas.value.length)}</span> ${ssrInterpolate(__t("destinations.destinations_found"))}</div></div></section><section class="py-12 bg-gray-50"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}>`);
            if (filteredWisatas.value.length === 0) {
              _push2(`<div class="text-center py-12"${_scopeId}><div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4"${_scopeId}><i class="ti ti-search text-gray-400 text-3xl"${_scopeId}></i></div><h3 class="text-xl font-semibold text-gray-900 mb-2"${_scopeId}>${ssrInterpolate(__t("destinations.no_destinations_found"))}</h3><p class="text-gray-600 mb-4"${_scopeId}>${ssrInterpolate(__t("destinations.change_filters"))}</p><button class="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"${_scopeId}>${ssrInterpolate(__t("common.reset_filters"))}</button></div>`);
            } else {
              _push2(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"${_scopeId}><!--[-->`);
              ssrRenderList(filteredWisatas.value, (wisata) => {
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("wisata.show", { id: wisata.slug }),
                  key: wisata.id,
                  class: "bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a, _b;
                    if (_push3) {
                      _push3(`<div class="relative h-48"${_scopeId2}><img${ssrRenderAttr("src", "/storage/" + wisata.thumbnail)}${ssrRenderAttr("alt", wisata.nama)} class="w-full h-full object-cover"${_scopeId2}><div class="absolute top-4 right-4 bg-white backdrop-blur-sm px-2 py-1 rounded-lg"${_scopeId2}><div class="flex items-center space-x-1"${_scopeId2}><i class="ti ti-star-filled text-yellow-400 text-sm"${_scopeId2}></i><span class="text-sm font-medium"${_scopeId2}>${ssrInterpolate(wisata.rating)}</span></div></div></div><div class="p-6"${_scopeId2}><div class="flex items-center text-sm text-gray-500 mb-2"${_scopeId2}><i class="ti ti-map-pin-filled mr-1 text-primary-600 text-lg"${_scopeId2}></i> ${ssrInterpolate((_a = wisata.kabupaten) == null ? void 0 : _a.nama_kabupaten)}</div><h3 class="text-xl font-semibold text-gray-900 mb-4"${_scopeId2}>${ssrInterpolate(wisata.nama)}</h3><div class="flex items-center justify-between"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(Link), {
                        href: _ctx.route("wisata.show", wisata.slug),
                        class: "inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(__t("destinations.details"))} <i class="ti ti-arrow-right ml-1"${_scopeId3}></i>`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(__t("destinations.details")) + " ", 1),
                              createVNode("i", { class: "ti ti-arrow-right ml-1" })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "relative h-48" }, [
                          createVNode("img", {
                            src: "/storage/" + wisata.thumbnail,
                            alt: wisata.nama,
                            class: "w-full h-full object-cover"
                          }, null, 8, ["src", "alt"]),
                          createVNode("div", { class: "absolute top-4 right-4 bg-white backdrop-blur-sm px-2 py-1 rounded-lg" }, [
                            createVNode("div", { class: "flex items-center space-x-1" }, [
                              createVNode("i", { class: "ti ti-star-filled text-yellow-400 text-sm" }),
                              createVNode("span", { class: "text-sm font-medium" }, toDisplayString(wisata.rating), 1)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "p-6" }, [
                          createVNode("div", { class: "flex items-center text-sm text-gray-500 mb-2" }, [
                            createVNode("i", { class: "ti ti-map-pin-filled mr-1 text-primary-600 text-lg" }),
                            createTextVNode(" " + toDisplayString((_b = wisata.kabupaten) == null ? void 0 : _b.nama_kabupaten), 1)
                          ]),
                          createVNode("h3", { class: "text-xl font-semibold text-gray-900 mb-4" }, toDisplayString(wisata.nama), 1),
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode(unref(Link), {
                              href: _ctx.route("wisata.show", wisata.slug),
                              class: "inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(__t("destinations.details")) + " ", 1),
                                createVNode("i", { class: "ti ti-arrow-right ml-1" })
                              ]),
                              _: 2
                            }, 1032, ["href"])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            }
            _push2(`</div></section><section class="py-16 bg-primary-600 text-white relative overflow-hidden"${_scopeId}><div class="absolute top-0 left-0 w-full h-full bg-[url(&#39;/assets/images/bg-pattern.png&#39;)] z-0 opacity-10"${_scopeId}></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"${_scopeId}><div class="max-w-3xl mx-auto"${_scopeId}><h2 class="text-3xl lg:text-4xl font-bold mb-4"${_scopeId}>${ssrInterpolate(__t("destinations.need_personal_recommendations"))}</h2><p class="text-md lg:text-xl text-blue-100 mb-8"${_scopeId}>${ssrInterpolate(__t("destinations.ai_description"))}</p><div class="flex flex-col sm:flex-row gap-4 justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("chatbot"),
              class: "inline-flex justify-center items-center px-5 py-3 bg-white text-primary-500 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-8 h-8 bg-primary-300 rounded-full mr-2"${_scopeId2}><img${ssrRenderAttr("src", "/assets/images/ajelai.png")} alt="" class="w-full"${_scopeId2}></div> ${ssrInterpolate(__t("destinations.ask_ai"))}`);
                } else {
                  return [
                    createVNode("div", { class: "w-8 h-8 bg-primary-300 rounded-full mr-2" }, [
                      createVNode("img", {
                        src: "/assets/images/ajelai.png",
                        alt: "",
                        class: "w-full"
                      })
                    ]),
                    createTextVNode(" " + toDisplayString(__t("destinations.ask_ai")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("kabupaten"),
              class: "inline-flex justify-center items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="ti ti-building-community mr-2 text-2xl"${_scopeId2}></i> ${ssrInterpolate(__t("destinations.explore_by_regency"))}`);
                } else {
                  return [
                    createVNode("i", { class: "ti ti-building-community mr-2 text-2xl" }),
                    createTextVNode(" " + toDisplayString(__t("destinations.explore_by_regency")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></section>`);
          } else {
            return [
              createVNode(unref(Head), {
                title: __t("nav.destinations")
              }, null, 8, ["title"]),
              createVNode("section", { class: "bg-primary-600 text-white py-16 relative overflow-hidden mt-20" }, [
                createVNode("div", { class: "absolute top-0 left-0 w-full h-full bg-[url('/assets/images/bg-pattern.png')] z-0 opacity-10" }),
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" }, [
                  createVNode("h1", { class: "text-3xl lg:text-4xl font-bold mb-4" }, toDisplayString(__t("destinations.title")) + " " + toDisplayString(__t("destinations.subtitle")), 1),
                  createVNode("p", { class: "text-md lg:text-xl text-blue-100 max-w-3xl mx-auto" }, toDisplayString(__t("destinations.description")), 1)
                ])
              ]),
              createVNode("section", { class: "py-8 bg-white border-b border-gray-200" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex flex-col lg:flex-row gap-4 items-center justify-between" }, [
                    createVNode("div", { class: "relative flex-1 max-w-md" }, [
                      createVNode("i", { class: "ti ti-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" }),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                        type: "text",
                        placeholder: __t("destinations.search_placeholder"),
                        class: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, searchQuery.value]
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col sm:flex-row gap-4 w-full sm:w-auto" }, [
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => selectedKabupaten.value = $event,
                        class: "px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      }, [
                        createVNode("option", { value: "" }, toDisplayString(__t("destinations.all_regencies")), 1),
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.kabupatens, (kabupaten) => {
                          return openBlock(), createBlock("option", {
                            key: kabupaten.id,
                            value: kabupaten.id
                          }, toDisplayString(kabupaten.nama_kabupaten), 9, ["value"]);
                        }), 128))
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, selectedKabupaten.value]
                      ]),
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => sortBy.value = $event,
                        class: "px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      }, [
                        createVNode("option", { value: "rating" }, toDisplayString(__t("destinations.highest_rating")), 1),
                        createVNode("option", { value: "name" }, toDisplayString(__t("destinations.name_a_z")), 1),
                        createVNode("option", { value: "location" }, toDisplayString(__t("destinations.location_a_z")), 1)
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, sortBy.value]
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "mt-4 text-gray-600" }, [
                    createVNode("span", { class: "font-medium" }, toDisplayString(filteredWisatas.value.length), 1),
                    createTextVNode(" " + toDisplayString(__t("destinations.destinations_found")), 1)
                  ])
                ])
              ]),
              createVNode("section", { class: "py-12 bg-gray-50" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  filteredWisatas.value.length === 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-center py-12"
                  }, [
                    createVNode("div", { class: "w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4" }, [
                      createVNode("i", { class: "ti ti-search text-gray-400 text-3xl" })
                    ]),
                    createVNode("h3", { class: "text-xl font-semibold text-gray-900 mb-2" }, toDisplayString(__t("destinations.no_destinations_found")), 1),
                    createVNode("p", { class: "text-gray-600 mb-4" }, toDisplayString(__t("destinations.change_filters")), 1),
                    createVNode("button", {
                      onClick: resetFilters,
                      class: "inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                    }, toDisplayString(__t("common.reset_filters")), 1)
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(filteredWisatas.value, (wisata) => {
                      return openBlock(), createBlock(unref(Link), {
                        href: _ctx.route("wisata.show", { id: wisata.slug }),
                        key: wisata.id,
                        class: "bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                      }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode("div", { class: "relative h-48" }, [
                              createVNode("img", {
                                src: "/storage/" + wisata.thumbnail,
                                alt: wisata.nama,
                                class: "w-full h-full object-cover"
                              }, null, 8, ["src", "alt"]),
                              createVNode("div", { class: "absolute top-4 right-4 bg-white backdrop-blur-sm px-2 py-1 rounded-lg" }, [
                                createVNode("div", { class: "flex items-center space-x-1" }, [
                                  createVNode("i", { class: "ti ti-star-filled text-yellow-400 text-sm" }),
                                  createVNode("span", { class: "text-sm font-medium" }, toDisplayString(wisata.rating), 1)
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "p-6" }, [
                              createVNode("div", { class: "flex items-center text-sm text-gray-500 mb-2" }, [
                                createVNode("i", { class: "ti ti-map-pin-filled mr-1 text-primary-600 text-lg" }),
                                createTextVNode(" " + toDisplayString((_a = wisata.kabupaten) == null ? void 0 : _a.nama_kabupaten), 1)
                              ]),
                              createVNode("h3", { class: "text-xl font-semibold text-gray-900 mb-4" }, toDisplayString(wisata.nama), 1),
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode(unref(Link), {
                                  href: _ctx.route("wisata.show", wisata.slug),
                                  class: "inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(__t("destinations.details")) + " ", 1),
                                    createVNode("i", { class: "ti ti-arrow-right ml-1" })
                                  ]),
                                  _: 2
                                }, 1032, ["href"])
                              ])
                            ])
                          ];
                        }),
                        _: 2
                      }, 1032, ["href"]);
                    }), 128))
                  ]))
                ])
              ]),
              createVNode("section", { class: "py-16 bg-primary-600 text-white relative overflow-hidden" }, [
                createVNode("div", { class: "absolute top-0 left-0 w-full h-full bg-[url('/assets/images/bg-pattern.png')] z-0 opacity-10" }),
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" }, [
                  createVNode("div", { class: "max-w-3xl mx-auto" }, [
                    createVNode("h2", { class: "text-3xl lg:text-4xl font-bold mb-4" }, toDisplayString(__t("destinations.need_personal_recommendations")), 1),
                    createVNode("p", { class: "text-md lg:text-xl text-blue-100 mb-8" }, toDisplayString(__t("destinations.ai_description")), 1),
                    createVNode("div", { class: "flex flex-col sm:flex-row gap-4 justify-center" }, [
                      createVNode(unref(Link), {
                        href: _ctx.route("chatbot"),
                        class: "inline-flex justify-center items-center px-5 py-3 bg-white text-primary-500 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "w-8 h-8 bg-primary-300 rounded-full mr-2" }, [
                            createVNode("img", {
                              src: "/assets/images/ajelai.png",
                              alt: "",
                              class: "w-full"
                            })
                          ]),
                          createTextVNode(" " + toDisplayString(__t("destinations.ask_ai")), 1)
                        ]),
                        _: 1
                      }, 8, ["href"]),
                      createVNode(unref(Link), {
                        href: _ctx.route("kabupaten"),
                        class: "inline-flex justify-center items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                      }, {
                        default: withCtx(() => [
                          createVNode("i", { class: "ti ti-building-community mr-2 text-2xl" }),
                          createTextVNode(" " + toDisplayString(__t("destinations.explore_by_regency")), 1)
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Wisata/Index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    wisata: Object,
    relatedWisatas: Array,
    currentLang: String,
    videoEmbed: String
  },
  setup(__props) {
    const props = __props;
    const page = usePage();
    const activeTab = ref("about");
    const tabs = ref([
      {
        id: "about",
        label: "detail.about_destination",
        icon: "ti ti-info-circle"
      },
      {
        id: "facilities",
        label: "common.facilities",
        icon: "ti ti-building-store"
      },
      {
        id: "gallery",
        label: "common.gallery",
        icon: "ti ti-photo"
      },
      {
        id: "video",
        label: "detail.destination_video",
        icon: "ti ti-video"
      },
      {
        id: "maps",
        label: "detail.location_map",
        icon: "ti ti-map"
      }
    ]);
    const __t = (key) => {
      const translations = page.props.translations || {};
      return key.split(".").reduce((obj, part) => obj && obj[part], translations) || key;
    };
    const currentUrl = ref("");
    const map = ref(null);
    const mapContainer = ref(null);
    onMounted(() => {
      currentUrl.value = window.location.href;
      new SimpleLightbox(".gallery a", {
        captions: true,
        captionsData: "alt",
        captionDelay: 250,
        captionPosition: "outside"
      });
    });
    watch(activeTab, async (val) => {
      if (val === "maps") {
        nextTick(async () => {
          if (map.value) {
            map.value.invalidateSize();
          } else {
            const L = await import("leaflet");
            delete L.Icon.Default.prototype._getIconUrl;
            L.Icon.Default.mergeOptions({
              iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).href,
              iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
              shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href
            });
            map.value = L.map(mapContainer.value).setView([props.wisata.latitude, props.wisata.longitude], 14);
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
              attribution: "&copy; OpenStreetMap contributors"
            }).addTo(map.value);
            L.marker([props.wisata.latitude, props.wisata.longitude]).addTo(map.value).bindPopup(props.wisata.nama).openPopup();
          }
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$d, mergeProps({ "current-lang": __props.currentLang }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), {
              title: __props.wisata.nama
            }, null, _parent2, _scopeId));
            _push2(`<section class="relative h-96 lg:h-[500px] overflow-hidden mt-20" data-v-b5ecfcb0${_scopeId}><img${ssrRenderAttr("src", "/storage/" + __props.wisata.thumbnail || "/images/placeholder.jpg")}${ssrRenderAttr("alt", __props.wisata.nama)} class="w-full h-full object-cover" data-v-b5ecfcb0${_scopeId}><div class="absolute inset-0 bg-black/30" data-v-b5ecfcb0${_scopeId}></div><div class="absolute inset-0 flex items-end" data-v-b5ecfcb0${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full" data-v-b5ecfcb0${_scopeId}><div class="text-white" data-v-b5ecfcb0${_scopeId}><div class="flex items-center text-sm mb-2" data-v-b5ecfcb0${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("beranda"),
              class: "hover:text-yellow-300 transition-colors duration-200"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__t("nav.home"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__t("nav.home")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<i class="ti ti-chevron-right mx-2" data-v-b5ecfcb0${_scopeId}></i>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("wisata"),
              class: "hover:text-yellow-300 transition-colors duration-200"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__t("nav.destinations"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__t("nav.destinations")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<i class="ti ti-chevron-right mx-2" data-v-b5ecfcb0${_scopeId}></i><span class="text-yellow-300 truncate" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(__props.wisata.nama)}</span></div><h1 class="text-3xl lg:text-5xl font-bold mb-4" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(__props.wisata.nama)}</h1><div class="flex items-center space-x-6" data-v-b5ecfcb0${_scopeId}><div class="flex items-center space-x-2" data-v-b5ecfcb0${_scopeId}><i class="ti ti-map-pin-filled text-yellow-300 text-lg" data-v-b5ecfcb0${_scopeId}></i><span data-v-b5ecfcb0${_scopeId}>${ssrInterpolate((_a = __props.wisata.kabupaten) == null ? void 0 : _a.nama_kabupaten)}</span></div><div class="flex items-center space-x-2" data-v-b5ecfcb0${_scopeId}><i class="ti ti-star-filled text-yellow-300 text-lg" data-v-b5ecfcb0${_scopeId}></i><span class="font-semibold" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(__props.wisata.rating)}</span><span class="text-gray-300" data-v-b5ecfcb0${_scopeId}>/5</span></div></div></div></div></div></section><section class="py-12 bg-white" data-v-b5ecfcb0${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-b5ecfcb0${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-v-b5ecfcb0${_scopeId}><div class="lg:col-span-2" data-v-b5ecfcb0${_scopeId}><div class="border-b border-gray-200 mb-8" data-v-b5ecfcb0${_scopeId}><nav class="-mb-px flex space-x-2 overflow-x-auto text-nowrap" data-v-b5ecfcb0${_scopeId}><!--[-->`);
            ssrRenderList(tabs.value, (tab) => {
              _push2(`<button class="${ssrRenderClass([
                "py-4 px-4 border-b-2 font-medium text-sm transition-colors duration-200 flex items-center justify-center",
                activeTab.value === tab.id ? "border-primary-600 bg-primary-600 text-white rounded-t-lg" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              ])}" data-v-b5ecfcb0${_scopeId}><i class="${ssrRenderClass([tab.icon, "mr-2 text-lg"])}" data-v-b5ecfcb0${_scopeId}></i> ${ssrInterpolate(__t(tab.label))}</button>`);
            });
            _push2(`<!--]--></nav></div><div class="tab-content" data-v-b5ecfcb0${_scopeId}><div style="${ssrRenderStyle(activeTab.value === "about" ? null : { display: "none" })}" class="tab-pane" data-v-b5ecfcb0${_scopeId}><div class="prose max-w-none" data-v-b5ecfcb0${_scopeId}><h2 class="text-2xl font-bold text-gray-900 mb-6" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(__t("detail.about_destination"))}</h2><div class="text-gray-600 leading-relaxed space-y-4" data-v-b5ecfcb0${_scopeId}><div class="text-justify description-wisata" data-v-b5ecfcb0${_scopeId}>${__props.wisata.deskripsi ?? ""}</div><div class="bg-gray-50 rounded-lg p-6 mt-6" data-v-b5ecfcb0${_scopeId}><h3 class="text-lg font-semibold text-gray-900 mb-4" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(__t("detail.quick_info"))}</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-b5ecfcb0${_scopeId}><div class="flex items-center space-x-3" data-v-b5ecfcb0${_scopeId}><i class="ti ti-map-pin text-primary-600 text-2xl" data-v-b5ecfcb0${_scopeId}></i><div data-v-b5ecfcb0${_scopeId}><p class="text-sm text-gray-500" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(__t("detail.village"))}</p><p class="font-medium text-sm" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(__props.wisata.lokasi)}</p></div></div><div class="flex items-center space-x-3" data-v-b5ecfcb0${_scopeId}><i class="ti ti-star text-primary-600 text-2xl" data-v-b5ecfcb0${_scopeId}></i><div data-v-b5ecfcb0${_scopeId}><p class="text-sm text-gray-500" data-v-b5ecfcb0${_scopeId}>Rating</p><p class="font-medium text-sm" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(__props.wisata.rating)}/5</p></div></div><div class="flex items-center space-x-3" data-v-b5ecfcb0${_scopeId}><i class="ti ti-building text-primary-600 text-2xl" data-v-b5ecfcb0${_scopeId}></i><div data-v-b5ecfcb0${_scopeId}><p class="text-sm text-gray-500" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(__t("detail.regency"))}</p><p class="font-medium text-sm" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate((_b = __props.wisata.kabupaten) == null ? void 0 : _b.nama_kabupaten)}</p></div></div><div class="flex items-center space-x-3" data-v-b5ecfcb0${_scopeId}><i class="ti ti-gps text-primary-600 text-2xl" data-v-b5ecfcb0${_scopeId}></i><div data-v-b5ecfcb0${_scopeId}><p class="text-sm text-gray-500" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(__t("detail.coordinates"))}</p><p class="font-medium text-sm" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(__props.wisata.latitude)}, ${ssrInterpolate(__props.wisata.longitude)}</p></div></div></div></div></div></div></div><div style="${ssrRenderStyle(activeTab.value === "facilities" ? null : { display: "none" })}" class="tab-pane" data-v-b5ecfcb0${_scopeId}><h2 class="text-2xl font-bold text-gray-900 mb-6" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(__t("common.facilities"))}</h2>`);
            if (__props.wisata.fasilitas && __props.wisata.fasilitas.length > 0) {
              _push2(`<div data-v-b5ecfcb0${_scopeId}><div class="grid grid-cols-2 md:grid-cols-3 gap-4" data-v-b5ecfcb0${_scopeId}><!--[-->`);
              ssrRenderList(__props.wisata.fasilitas, (fasilitas) => {
                _push2(`<div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:ring-2 hover:ring-primary-600 transition-all duration-300" data-v-b5ecfcb0${_scopeId}><div class="w-8 h-8 flex items-center justify-center" data-v-b5ecfcb0${_scopeId}><img${ssrRenderAttr("src", "/storage/" + fasilitas.icon)} alt="" data-v-b5ecfcb0${_scopeId}></div><span class="text-gray-700 truncate" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(fasilitas.nama)}</span></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div style="${ssrRenderStyle(activeTab.value === "gallery" ? null : { display: "none" })}" class="tab-pane" data-v-b5ecfcb0${_scopeId}><h2 class="text-2xl font-bold text-gray-900 mb-6" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(__t("common.gallery"))}</h2>`);
            if (__props.wisata.galeri && __props.wisata.galeri.length > 0) {
              _push2(`<div data-v-b5ecfcb0${_scopeId}><div class="gallery grid grid-cols-2 lg:grid-cols-3 gap-4" data-v-b5ecfcb0${_scopeId}><!--[-->`);
              ssrRenderList(__props.wisata.galeri, (image, index) => {
                _push2(`<a${ssrRenderAttr("href", "/storage/" + image)}${ssrRenderAttr("alt", `${__props.wisata.nama} - ${index + 1}`)} class="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-200 group" data-v-b5ecfcb0${_scopeId}><img${ssrRenderAttr("src", "/storage/" + image)}${ssrRenderAttr("alt", `${__props.wisata.nama} - ${index + 1}`)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-v-b5ecfcb0${_scopeId}><div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center" data-v-b5ecfcb0${_scopeId}><i class="ti ti-eye text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" data-v-b5ecfcb0${_scopeId}></i></div></a>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div style="${ssrRenderStyle(activeTab.value === "video" ? null : { display: "none" })}" class="tab-pane" data-v-b5ecfcb0${_scopeId}><h2 class="text-2xl font-bold text-gray-900 mb-6" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(__t("detail.destination_video"))}</h2>`);
            if (__props.wisata.video) {
              _push2(`<div data-v-b5ecfcb0${_scopeId}><div class="aspect-video rounded-lg overflow-hidden" data-v-b5ecfcb0${_scopeId}><iframe width="100%" height="100%"${ssrRenderAttr("src", __props.videoEmbed)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen data-v-b5ecfcb0${_scopeId}></iframe></div></div>`);
            } else {
              _push2(`<div class="text-center py-12" data-v-b5ecfcb0${_scopeId}><i class="ti ti-video text-gray-400 text-4xl mb-4" data-v-b5ecfcb0${_scopeId}></i><p class="text-gray-500" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(__t("detail.video_not_found"))}</p></div>`);
            }
            _push2(`</div><div style="${ssrRenderStyle(activeTab.value === "maps" ? null : { display: "none" })}" class="tab-pane" data-v-b5ecfcb0${_scopeId}><h2 class="text-2xl font-bold text-gray-900 mb-6" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(__t("detail.location_map"))}</h2><div class="bg-gray-50 rounded-lg p-6 mb-6" data-v-b5ecfcb0${_scopeId}><div class="flex items-start space-x-4" data-v-b5ecfcb0${_scopeId}><div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0" data-v-b5ecfcb0${_scopeId}><i class="ti ti-map-pin text-primary-600 text-xl" data-v-b5ecfcb0${_scopeId}></i></div><div data-v-b5ecfcb0${_scopeId}><h3 class="text-lg font-semibold text-gray-900 mb-1" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(__t("detail.full_address"))}</h3><p class="text-gray-600 mb-1 text-sm sm:text-base" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(__props.wisata.lokasi)}, ${ssrInterpolate(__props.wisata.kabupaten.nama_kabupaten)}</p><div class="flex items-center space-x-4 text-sm text-gray-500" data-v-b5ecfcb0${_scopeId}><span data-v-b5ecfcb0${_scopeId}>Lat: ${ssrInterpolate(__props.wisata.latitude)}</span><span data-v-b5ecfcb0${_scopeId}>Long: ${ssrInterpolate(__props.wisata.longitude)}</span></div></div></div></div><div class="w-full h-80 rounded-lg overflow-hidden mb-4 z-0" data-v-b5ecfcb0${_scopeId}><div id="destination-map" class="w-full h-full" data-v-b5ecfcb0${_scopeId}></div></div><div class="bg-gray-100 rounded-lg p-8 text-center" data-v-b5ecfcb0${_scopeId}><p class="text-sm text-gray-400 mb-4" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(__t("detail.click_open_maps"))}</p><a${ssrRenderAttr("href", __props.wisata.maps_link)} target="_blank" class="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200" data-v-b5ecfcb0${_scopeId}><i class="ti ti-external-link mr-2 text-2xl" data-v-b5ecfcb0${_scopeId}></i> ${ssrInterpolate(__t("detail.open_google_maps"))}</a></div></div></div></div><div class="lg:col-span-1" data-v-b5ecfcb0${_scopeId}><div class="bg-primary-600 text-white rounded-xl p-6 mb-6 relative overflow-hidden" data-v-b5ecfcb0${_scopeId}><div class="absolute top-0 left-0 w-full h-full bg-[url(&#39;/assets/images/bg-pattern.png&#39;)] z-0 opacity-10" data-v-b5ecfcb0${_scopeId}></div><div class="text-center relative z-10" data-v-b5ecfcb0${_scopeId}><div class="w-16 h-16 bg-white ring-4 ring-white rounded-full flex items-center justify-center mx-auto mb-4" data-v-b5ecfcb0${_scopeId}><img${ssrRenderAttr("src", "/assets/images/ajelai.png")} alt="" class="w-full" data-v-b5ecfcb0${_scopeId}></div><h3 class="text-lg font-semibold mb-2" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(__t("detail.need_more_info"))}</h3><p class="text-gray-100 text-sm mb-4" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(__t("detail.ai_detail_description"))}</p>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("chatbot"),
              class: "inline-flex items-center px-4 py-2 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="ti ti-message-circle mr-2 text-2xl" data-v-b5ecfcb0${_scopeId2}></i> ${ssrInterpolate(__t("detail.chat_now"))}`);
                } else {
                  return [
                    createVNode("i", { class: "ti ti-message-circle mr-2 text-2xl" }),
                    createTextVNode(" " + toDisplayString(__t("detail.chat_now")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="bg-white border border-gray-200 rounded-xl p-6" data-v-b5ecfcb0${_scopeId}><h3 class="text-lg font-semibold text-gray-900 mb-4" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(__t("common.share"))}</h3><div class="flex space-x-3" data-v-b5ecfcb0${_scopeId}><a${ssrRenderAttr("href", `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl.value)}`)} target="_blank" class="flex items-center justify-center py-3 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200" data-v-b5ecfcb0${_scopeId}><i class="ti ti-brand-facebook" data-v-b5ecfcb0${_scopeId}></i></a><a${ssrRenderAttr("href", `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl.value)}&text=${encodeURIComponent(__props.wisata.nama)}`)} target="_blank" class="flex items-center justify-center py-3 px-3 bg-black text-white rounded-lg transition-colors duration-200" data-v-b5ecfcb0${_scopeId}><i class="ti ti-brand-x" data-v-b5ecfcb0${_scopeId}></i></a><a${ssrRenderAttr("href", `https://wa.me/?text=${encodeURIComponent(__props.wisata.nama + " - " + currentUrl.value)}`)} target="_blank" class="flex items-center justify-center py-3 px-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200" data-v-b5ecfcb0${_scopeId}><i class="ti ti-brand-whatsapp" data-v-b5ecfcb0${_scopeId}></i></a></div></div></div></div></div></section>`);
            if (__props.relatedWisatas && __props.relatedWisatas.length > 0) {
              _push2(`<section class="py-12 bg-gray-50" data-v-b5ecfcb0${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-b5ecfcb0${_scopeId}><h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-8" data-v-b5ecfcb0${_scopeId}>${ssrInterpolate(__t("detail.other_destinations"))}</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-b5ecfcb0${_scopeId}><!--[-->`);
              ssrRenderList(__props.relatedWisatas, (related) => {
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("wisata.show", { id: related.slug }),
                  key: related.id,
                  class: "bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a2, _b2;
                    if (_push3) {
                      _push3(`<div class="relative h-48" data-v-b5ecfcb0${_scopeId2}><img${ssrRenderAttr("src", "/storage/" + related.thumbnail || "/images/placeholder.jpg")}${ssrRenderAttr("alt", related.nama)} class="w-full h-full object-cover" data-v-b5ecfcb0${_scopeId2}><div class="absolute top-4 right-4 bg-white backdrop-blur-sm px-2 py-1 rounded-lg" data-v-b5ecfcb0${_scopeId2}><div class="flex items-center space-x-1" data-v-b5ecfcb0${_scopeId2}><i class="ti ti-star-filled text-yellow-400 text-sm" data-v-b5ecfcb0${_scopeId2}></i><span class="text-sm font-medium" data-v-b5ecfcb0${_scopeId2}>${ssrInterpolate(related.rating)}</span></div></div></div><div class="p-6" data-v-b5ecfcb0${_scopeId2}><div class="flex items-center text-sm text-gray-500 mb-2" data-v-b5ecfcb0${_scopeId2}><i class="ti ti-map-pin-filled mr-1 text-lg text-primary-600" data-v-b5ecfcb0${_scopeId2}></i> ${ssrInterpolate((_a2 = related.kabupaten) == null ? void 0 : _a2.nama_kabupaten)}</div><h3 class="text-lg font-semibold text-gray-900 mb-4" data-v-b5ecfcb0${_scopeId2}>${ssrInterpolate(related.nama)}</h3>`);
                      _push3(ssrRenderComponent(unref(Link), {
                        href: _ctx.route("wisata.show", related.slug),
                        class: "inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(__t("common.view_details"))} <i class="ti ti-arrow-right ml-1" data-v-b5ecfcb0${_scopeId3}></i>`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(__t("common.view_details")) + " ", 1),
                              createVNode("i", { class: "ti ti-arrow-right ml-1" })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "relative h-48" }, [
                          createVNode("img", {
                            src: "/storage/" + related.thumbnail || "/images/placeholder.jpg",
                            alt: related.nama,
                            class: "w-full h-full object-cover"
                          }, null, 8, ["src", "alt"]),
                          createVNode("div", { class: "absolute top-4 right-4 bg-white backdrop-blur-sm px-2 py-1 rounded-lg" }, [
                            createVNode("div", { class: "flex items-center space-x-1" }, [
                              createVNode("i", { class: "ti ti-star-filled text-yellow-400 text-sm" }),
                              createVNode("span", { class: "text-sm font-medium" }, toDisplayString(related.rating), 1)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "p-6" }, [
                          createVNode("div", { class: "flex items-center text-sm text-gray-500 mb-2" }, [
                            createVNode("i", { class: "ti ti-map-pin-filled mr-1 text-lg text-primary-600" }),
                            createTextVNode(" " + toDisplayString((_b2 = related.kabupaten) == null ? void 0 : _b2.nama_kabupaten), 1)
                          ]),
                          createVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-4" }, toDisplayString(related.nama), 1),
                          createVNode(unref(Link), {
                            href: _ctx.route("wisata.show", related.slug),
                            class: "inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__t("common.view_details")) + " ", 1),
                              createVNode("i", { class: "ti ti-arrow-right ml-1" })
                            ]),
                            _: 2
                          }, 1032, ["href"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div></section>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="fixed bottom-6 right-6 z-50" data-v-b5ecfcb0${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("chatbot"),
              class: "w-14 h-14 bg-white text-white rounded-full flex items-center justify-center shadow-lg ring-4 ring-primary-600 transition-all duration-300 transform hover:scale-110"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", "/assets/images/ajelai.png")} alt="" class="w-full" data-v-b5ecfcb0${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: "/assets/images/ajelai.png",
                      alt: "",
                      class: "w-full"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(unref(Head), {
                title: __props.wisata.nama
              }, null, 8, ["title"]),
              createVNode("section", { class: "relative h-96 lg:h-[500px] overflow-hidden mt-20" }, [
                createVNode("img", {
                  src: "/storage/" + __props.wisata.thumbnail || "/images/placeholder.jpg",
                  alt: __props.wisata.nama,
                  class: "w-full h-full object-cover"
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "absolute inset-0 bg-black/30" }),
                createVNode("div", { class: "absolute inset-0 flex items-end" }, [
                  createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full" }, [
                    createVNode("div", { class: "text-white" }, [
                      createVNode("div", { class: "flex items-center text-sm mb-2" }, [
                        createVNode(unref(Link), {
                          href: _ctx.route("beranda"),
                          class: "hover:text-yellow-300 transition-colors duration-200"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__t("nav.home")), 1)
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode("i", { class: "ti ti-chevron-right mx-2" }),
                        createVNode(unref(Link), {
                          href: _ctx.route("wisata"),
                          class: "hover:text-yellow-300 transition-colors duration-200"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__t("nav.destinations")), 1)
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode("i", { class: "ti ti-chevron-right mx-2" }),
                        createVNode("span", { class: "text-yellow-300 truncate" }, toDisplayString(__props.wisata.nama), 1)
                      ]),
                      createVNode("h1", { class: "text-3xl lg:text-5xl font-bold mb-4" }, toDisplayString(__props.wisata.nama), 1),
                      createVNode("div", { class: "flex items-center space-x-6" }, [
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode("i", { class: "ti ti-map-pin-filled text-yellow-300 text-lg" }),
                          createVNode("span", null, toDisplayString((_c = __props.wisata.kabupaten) == null ? void 0 : _c.nama_kabupaten), 1)
                        ]),
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode("i", { class: "ti ti-star-filled text-yellow-300 text-lg" }),
                          createVNode("span", { class: "font-semibold" }, toDisplayString(__props.wisata.rating), 1),
                          createVNode("span", { class: "text-gray-300" }, "/5")
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("section", { class: "py-12 bg-white" }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-8" }, [
                    createVNode("div", { class: "lg:col-span-2" }, [
                      createVNode("div", { class: "border-b border-gray-200 mb-8" }, [
                        createVNode("nav", { class: "-mb-px flex space-x-2 overflow-x-auto text-nowrap" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(tabs.value, (tab) => {
                            return openBlock(), createBlock("button", {
                              key: tab.id,
                              onClick: ($event) => activeTab.value = tab.id,
                              class: [
                                "py-4 px-4 border-b-2 font-medium text-sm transition-colors duration-200 flex items-center justify-center",
                                activeTab.value === tab.id ? "border-primary-600 bg-primary-600 text-white rounded-t-lg" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                              ]
                            }, [
                              createVNode("i", {
                                class: [tab.icon, "mr-2 text-lg"]
                              }, null, 2),
                              createTextVNode(" " + toDisplayString(__t(tab.label)), 1)
                            ], 10, ["onClick"]);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "tab-content" }, [
                        withDirectives(createVNode("div", { class: "tab-pane" }, [
                          createVNode("div", { class: "prose max-w-none" }, [
                            createVNode("h2", { class: "text-2xl font-bold text-gray-900 mb-6" }, toDisplayString(__t("detail.about_destination")), 1),
                            createVNode("div", { class: "text-gray-600 leading-relaxed space-y-4" }, [
                              createVNode("div", {
                                innerHTML: __props.wisata.deskripsi,
                                class: "text-justify description-wisata"
                              }, null, 8, ["innerHTML"]),
                              createVNode("div", { class: "bg-gray-50 rounded-lg p-6 mt-6" }, [
                                createVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-4" }, toDisplayString(__t("detail.quick_info")), 1),
                                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                                  createVNode("div", { class: "flex items-center space-x-3" }, [
                                    createVNode("i", { class: "ti ti-map-pin text-primary-600 text-2xl" }),
                                    createVNode("div", null, [
                                      createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(__t("detail.village")), 1),
                                      createVNode("p", { class: "font-medium text-sm" }, toDisplayString(__props.wisata.lokasi), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center space-x-3" }, [
                                    createVNode("i", { class: "ti ti-star text-primary-600 text-2xl" }),
                                    createVNode("div", null, [
                                      createVNode("p", { class: "text-sm text-gray-500" }, "Rating"),
                                      createVNode("p", { class: "font-medium text-sm" }, toDisplayString(__props.wisata.rating) + "/5", 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center space-x-3" }, [
                                    createVNode("i", { class: "ti ti-building text-primary-600 text-2xl" }),
                                    createVNode("div", null, [
                                      createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(__t("detail.regency")), 1),
                                      createVNode("p", { class: "font-medium text-sm" }, toDisplayString((_d = __props.wisata.kabupaten) == null ? void 0 : _d.nama_kabupaten), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center space-x-3" }, [
                                    createVNode("i", { class: "ti ti-gps text-primary-600 text-2xl" }),
                                    createVNode("div", null, [
                                      createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(__t("detail.coordinates")), 1),
                                      createVNode("p", { class: "font-medium text-sm" }, toDisplayString(__props.wisata.latitude) + ", " + toDisplayString(__props.wisata.longitude), 1)
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ], 512), [
                          [vShow, activeTab.value === "about"]
                        ]),
                        withDirectives(createVNode("div", { class: "tab-pane" }, [
                          createVNode("h2", { class: "text-2xl font-bold text-gray-900 mb-6" }, toDisplayString(__t("common.facilities")), 1),
                          __props.wisata.fasilitas && __props.wisata.fasilitas.length > 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode("div", { class: "grid grid-cols-2 md:grid-cols-3 gap-4" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.wisata.fasilitas, (fasilitas) => {
                                return openBlock(), createBlock("div", {
                                  key: fasilitas.id,
                                  class: "flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:ring-2 hover:ring-primary-600 transition-all duration-300"
                                }, [
                                  createVNode("div", { class: "w-8 h-8 flex items-center justify-center" }, [
                                    createVNode("img", {
                                      src: "/storage/" + fasilitas.icon,
                                      alt: ""
                                    }, null, 8, ["src"])
                                  ]),
                                  createVNode("span", { class: "text-gray-700 truncate" }, toDisplayString(fasilitas.nama), 1)
                                ]);
                              }), 128))
                            ])
                          ])) : createCommentVNode("", true)
                        ], 512), [
                          [vShow, activeTab.value === "facilities"]
                        ]),
                        withDirectives(createVNode("div", { class: "tab-pane" }, [
                          createVNode("h2", { class: "text-2xl font-bold text-gray-900 mb-6" }, toDisplayString(__t("common.gallery")), 1),
                          __props.wisata.galeri && __props.wisata.galeri.length > 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode("div", { class: "gallery grid grid-cols-2 lg:grid-cols-3 gap-4" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.wisata.galeri, (image, index) => {
                                return openBlock(), createBlock("a", {
                                  key: index,
                                  href: "/storage/" + image,
                                  alt: `${__props.wisata.nama} - ${index + 1}`,
                                  class: "relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-200 group"
                                }, [
                                  createVNode("img", {
                                    src: "/storage/" + image,
                                    alt: `${__props.wisata.nama} - ${index + 1}`,
                                    class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  }, null, 8, ["src", "alt"]),
                                  createVNode("div", { class: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center" }, [
                                    createVNode("i", { class: "ti ti-eye text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" })
                                  ])
                                ], 8, ["href", "alt"]);
                              }), 128))
                            ])
                          ])) : createCommentVNode("", true)
                        ], 512), [
                          [vShow, activeTab.value === "gallery"]
                        ]),
                        withDirectives(createVNode("div", { class: "tab-pane" }, [
                          createVNode("h2", { class: "text-2xl font-bold text-gray-900 mb-6" }, toDisplayString(__t("detail.destination_video")), 1),
                          __props.wisata.video ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode("div", { class: "aspect-video rounded-lg overflow-hidden" }, [
                              createVNode("iframe", {
                                width: "100%",
                                height: "100%",
                                src: __props.videoEmbed,
                                title: "YouTube video player",
                                frameborder: "0",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                referrerpolicy: "strict-origin-when-cross-origin",
                                allowfullscreen: ""
                              }, null, 8, ["src"])
                            ])
                          ])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "text-center py-12"
                          }, [
                            createVNode("i", { class: "ti ti-video text-gray-400 text-4xl mb-4" }),
                            createVNode("p", { class: "text-gray-500" }, toDisplayString(__t("detail.video_not_found")), 1)
                          ]))
                        ], 512), [
                          [vShow, activeTab.value === "video"]
                        ]),
                        withDirectives(createVNode("div", { class: "tab-pane" }, [
                          createVNode("h2", { class: "text-2xl font-bold text-gray-900 mb-6" }, toDisplayString(__t("detail.location_map")), 1),
                          createVNode("div", { class: "bg-gray-50 rounded-lg p-6 mb-6" }, [
                            createVNode("div", { class: "flex items-start space-x-4" }, [
                              createVNode("div", { class: "w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0" }, [
                                createVNode("i", { class: "ti ti-map-pin text-primary-600 text-xl" })
                              ]),
                              createVNode("div", null, [
                                createVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-1" }, toDisplayString(__t("detail.full_address")), 1),
                                createVNode("p", { class: "text-gray-600 mb-1 text-sm sm:text-base" }, toDisplayString(__props.wisata.lokasi) + ", " + toDisplayString(__props.wisata.kabupaten.nama_kabupaten), 1),
                                createVNode("div", { class: "flex items-center space-x-4 text-sm text-gray-500" }, [
                                  createVNode("span", null, "Lat: " + toDisplayString(__props.wisata.latitude), 1),
                                  createVNode("span", null, "Long: " + toDisplayString(__props.wisata.longitude), 1)
                                ])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "w-full h-80 rounded-lg overflow-hidden mb-4 z-0" }, [
                            createVNode("div", {
                              id: "destination-map",
                              ref_key: "mapContainer",
                              ref: mapContainer,
                              class: "w-full h-full"
                            }, null, 512)
                          ]),
                          createVNode("div", { class: "bg-gray-100 rounded-lg p-8 text-center" }, [
                            createVNode("p", { class: "text-sm text-gray-400 mb-4" }, toDisplayString(__t("detail.click_open_maps")), 1),
                            createVNode("a", {
                              href: __props.wisata.maps_link,
                              target: "_blank",
                              class: "inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                            }, [
                              createVNode("i", { class: "ti ti-external-link mr-2 text-2xl" }),
                              createTextVNode(" " + toDisplayString(__t("detail.open_google_maps")), 1)
                            ], 8, ["href"])
                          ])
                        ], 512), [
                          [vShow, activeTab.value === "maps"]
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "lg:col-span-1" }, [
                      createVNode("div", { class: "bg-primary-600 text-white rounded-xl p-6 mb-6 relative overflow-hidden" }, [
                        createVNode("div", { class: "absolute top-0 left-0 w-full h-full bg-[url('/assets/images/bg-pattern.png')] z-0 opacity-10" }),
                        createVNode("div", { class: "text-center relative z-10" }, [
                          createVNode("div", { class: "w-16 h-16 bg-white ring-4 ring-white rounded-full flex items-center justify-center mx-auto mb-4" }, [
                            createVNode("img", {
                              src: "/assets/images/ajelai.png",
                              alt: "",
                              class: "w-full"
                            })
                          ]),
                          createVNode("h3", { class: "text-lg font-semibold mb-2" }, toDisplayString(__t("detail.need_more_info")), 1),
                          createVNode("p", { class: "text-gray-100 text-sm mb-4" }, toDisplayString(__t("detail.ai_detail_description")), 1),
                          createVNode(unref(Link), {
                            href: _ctx.route("chatbot"),
                            class: "inline-flex items-center px-4 py-2 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                          }, {
                            default: withCtx(() => [
                              createVNode("i", { class: "ti ti-message-circle mr-2 text-2xl" }),
                              createTextVNode(" " + toDisplayString(__t("detail.chat_now")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ]),
                      createVNode("div", { class: "bg-white border border-gray-200 rounded-xl p-6" }, [
                        createVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-4" }, toDisplayString(__t("common.share")), 1),
                        createVNode("div", { class: "flex space-x-3" }, [
                          createVNode("a", {
                            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl.value)}`,
                            target: "_blank",
                            class: "flex items-center justify-center py-3 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                          }, [
                            createVNode("i", { class: "ti ti-brand-facebook" })
                          ], 8, ["href"]),
                          createVNode("a", {
                            href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl.value)}&text=${encodeURIComponent(__props.wisata.nama)}`,
                            target: "_blank",
                            class: "flex items-center justify-center py-3 px-3 bg-black text-white rounded-lg transition-colors duration-200"
                          }, [
                            createVNode("i", { class: "ti ti-brand-x" })
                          ], 8, ["href"]),
                          createVNode("a", {
                            href: `https://wa.me/?text=${encodeURIComponent(__props.wisata.nama + " - " + currentUrl.value)}`,
                            target: "_blank",
                            class: "flex items-center justify-center py-3 px-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                          }, [
                            createVNode("i", { class: "ti ti-brand-whatsapp" })
                          ], 8, ["href"])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              __props.relatedWisatas && __props.relatedWisatas.length > 0 ? (openBlock(), createBlock("section", {
                key: 0,
                class: "py-12 bg-gray-50"
              }, [
                createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                  createVNode("h2", { class: "text-2xl lg:text-3xl font-bold text-gray-900 mb-8" }, toDisplayString(__t("detail.other_destinations")), 1),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.relatedWisatas, (related) => {
                      return openBlock(), createBlock(unref(Link), {
                        href: _ctx.route("wisata.show", { id: related.slug }),
                        key: related.id,
                        class: "bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                      }, {
                        default: withCtx(() => {
                          var _a2;
                          return [
                            createVNode("div", { class: "relative h-48" }, [
                              createVNode("img", {
                                src: "/storage/" + related.thumbnail || "/images/placeholder.jpg",
                                alt: related.nama,
                                class: "w-full h-full object-cover"
                              }, null, 8, ["src", "alt"]),
                              createVNode("div", { class: "absolute top-4 right-4 bg-white backdrop-blur-sm px-2 py-1 rounded-lg" }, [
                                createVNode("div", { class: "flex items-center space-x-1" }, [
                                  createVNode("i", { class: "ti ti-star-filled text-yellow-400 text-sm" }),
                                  createVNode("span", { class: "text-sm font-medium" }, toDisplayString(related.rating), 1)
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "p-6" }, [
                              createVNode("div", { class: "flex items-center text-sm text-gray-500 mb-2" }, [
                                createVNode("i", { class: "ti ti-map-pin-filled mr-1 text-lg text-primary-600" }),
                                createTextVNode(" " + toDisplayString((_a2 = related.kabupaten) == null ? void 0 : _a2.nama_kabupaten), 1)
                              ]),
                              createVNode("h3", { class: "text-lg font-semibold text-gray-900 mb-4" }, toDisplayString(related.nama), 1),
                              createVNode(unref(Link), {
                                href: _ctx.route("wisata.show", related.slug),
                                class: "inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(__t("common.view_details")) + " ", 1),
                                  createVNode("i", { class: "ti ti-arrow-right ml-1" })
                                ]),
                                _: 2
                              }, 1032, ["href"])
                            ])
                          ];
                        }),
                        _: 2
                      }, 1032, ["href"]);
                    }), 128))
                  ])
                ])
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "fixed bottom-6 right-6 z-50" }, [
                createVNode(unref(Link), {
                  href: _ctx.route("chatbot"),
                  class: "w-14 h-14 bg-white text-white rounded-full flex items-center justify-center shadow-lg ring-4 ring-primary-600 transition-all duration-300 transform hover:scale-110"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: "/assets/images/ajelai.png",
                      alt: "",
                      class: "w-full"
                    })
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Wisata/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b5ecfcb0"]]);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show
}, Symbol.toStringTag, { value: "Module" }));
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t4) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r2 = arguments[e2];
      for (var n2 in r2) ({}).hasOwnProperty.call(r2, n2) && (t4[n2] = r2[n2]);
    }
    return t4;
  }, t.apply(null, arguments);
}
var e = String.prototype.replace, r = /%20/g, n = "RFC3986", o = { default: n, formatters: { RFC1738: function(t4) {
  return e.call(t4, r, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738" }, i = Object.prototype.hasOwnProperty, u = Array.isArray, a = function() {
  for (var t4 = [], e2 = 0; e2 < 256; ++e2) t4.push("%" + ((e2 < 16 ? "0" : "") + e2.toString(16)).toUpperCase());
  return t4;
}(), s = function(t4, e2) {
  for (var r2 = e2 && e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n2 = 0; n2 < t4.length; ++n2) void 0 !== t4[n2] && (r2[n2] = t4[n2]);
  return r2;
}, f$1 = { arrayToObject: s, assign: function(t4, e2) {
  return Object.keys(e2).reduce(function(t5, r2) {
    return t5[r2] = e2[r2], t5;
  }, t4);
}, combine: function(t4, e2) {
  return [].concat(t4, e2);
}, compact: function(t4) {
  for (var e2 = [{ obj: { o: t4 }, prop: "o" }], r2 = [], n2 = 0; n2 < e2.length; ++n2) for (var o2 = e2[n2], i2 = o2.obj[o2.prop], a2 = Object.keys(i2), s2 = 0; s2 < a2.length; ++s2) {
    var f2 = a2[s2], c2 = i2[f2];
    "object" == typeof c2 && null !== c2 && -1 === r2.indexOf(c2) && (e2.push({ obj: i2, prop: f2 }), r2.push(c2));
  }
  return function(t5) {
    for (; t5.length > 1; ) {
      var e3 = t5.pop(), r3 = e3.obj[e3.prop];
      if (u(r3)) {
        for (var n3 = [], o3 = 0; o3 < r3.length; ++o3) void 0 !== r3[o3] && n3.push(r3[o3]);
        e3.obj[e3.prop] = n3;
      }
    }
  }(e2), t4;
}, decode: function(t4, e2, r2) {
  var n2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === r2) return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t5) {
    return n2;
  }
}, encode: function(t4, e2, r2, n2, i2) {
  if (0 === t4.length) return t4;
  var u2 = t4;
  if ("symbol" == typeof t4 ? u2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (u2 = String(t4)), "iso-8859-1" === r2) return escape(u2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
    return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
  });
  for (var s2 = "", f2 = 0; f2 < u2.length; ++f2) {
    var c2 = u2.charCodeAt(f2);
    45 === c2 || 46 === c2 || 95 === c2 || 126 === c2 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || i2 === o.RFC1738 && (40 === c2 || 41 === c2) ? s2 += u2.charAt(f2) : c2 < 128 ? s2 += a[c2] : c2 < 2048 ? s2 += a[192 | c2 >> 6] + a[128 | 63 & c2] : c2 < 55296 || c2 >= 57344 ? s2 += a[224 | c2 >> 12] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2] : (c2 = 65536 + ((1023 & c2) << 10 | 1023 & u2.charCodeAt(f2 += 1)), s2 += a[240 | c2 >> 18] + a[128 | c2 >> 12 & 63] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2]);
  }
  return s2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, e2) {
  if (u(t4)) {
    for (var r2 = [], n2 = 0; n2 < t4.length; n2 += 1) r2.push(e2(t4[n2]));
    return r2;
  }
  return e2(t4);
}, merge: function t2(e2, r2, n2) {
  if (!r2) return e2;
  if ("object" != typeof r2) {
    if (u(e2)) e2.push(r2);
    else {
      if (!e2 || "object" != typeof e2) return [e2, r2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !i.call(Object.prototype, r2)) && (e2[r2] = true);
    }
    return e2;
  }
  if (!e2 || "object" != typeof e2) return [e2].concat(r2);
  var o2 = e2;
  return u(e2) && !u(r2) && (o2 = s(e2, n2)), u(e2) && u(r2) ? (r2.forEach(function(r3, o3) {
    if (i.call(e2, o3)) {
      var u2 = e2[o3];
      u2 && "object" == typeof u2 && r3 && "object" == typeof r3 ? e2[o3] = t2(u2, r3, n2) : e2.push(r3);
    } else e2[o3] = r3;
  }), e2) : Object.keys(r2).reduce(function(e3, o3) {
    var u2 = r2[o3];
    return e3[o3] = i.call(e3, o3) ? t2(e3[o3], u2, n2) : u2, e3;
  }, o2);
} }, c = Object.prototype.hasOwnProperty, l = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, e2) {
  return t4 + "[" + e2 + "]";
}, repeat: function(t4) {
  return t4;
} }, p = Array.isArray, h = String.prototype.split, y = Array.prototype.push, d = function(t4, e2) {
  y.apply(t4, p(e2) ? e2 : [e2]);
}, g = Date.prototype.toISOString, b = o.default, v = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: f$1.encode, encodeValuesOnly: false, format: b, formatter: o.formatters[b], indices: false, serializeDate: function(t4) {
  return g.call(t4);
}, skipNulls: false, strictNullHandling: false }, m$1 = function t3(e2, r2, n2, o2, i2, u2, a2, s2, c2, l2, y2, g2, b2, m2) {
  var j2, w2 = e2;
  if ("function" == typeof a2 ? w2 = a2(r2, w2) : w2 instanceof Date ? w2 = l2(w2) : "comma" === n2 && p(w2) && (w2 = f$1.maybeMap(w2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === w2) {
    if (o2) return u2 && !b2 ? u2(r2, v.encoder, m2, "key", y2) : r2;
    w2 = "";
  }
  if ("string" == typeof (j2 = w2) || "number" == typeof j2 || "boolean" == typeof j2 || "symbol" == typeof j2 || "bigint" == typeof j2 || f$1.isBuffer(w2)) {
    if (u2) {
      var $2 = b2 ? r2 : u2(r2, v.encoder, m2, "key", y2);
      if ("comma" === n2 && b2) {
        for (var O2 = h.call(String(w2), ","), E2 = "", R2 = 0; R2 < O2.length; ++R2) E2 += (0 === R2 ? "" : ",") + g2(u2(O2[R2], v.encoder, m2, "value", y2));
        return [g2($2) + "=" + E2];
      }
      return [g2($2) + "=" + g2(u2(w2, v.encoder, m2, "value", y2))];
    }
    return [g2(r2) + "=" + g2(String(w2))];
  }
  var S2, x3 = [];
  if (void 0 === w2) return x3;
  if ("comma" === n2 && p(w2)) S2 = [{ value: w2.length > 0 ? w2.join(",") || null : void 0 }];
  else if (p(a2)) S2 = a2;
  else {
    var N3 = Object.keys(w2);
    S2 = s2 ? N3.sort(s2) : N3;
  }
  for (var T2 = 0; T2 < S2.length; ++T2) {
    var k2 = S2[T2], C2 = "object" == typeof k2 && void 0 !== k2.value ? k2.value : w2[k2];
    if (!i2 || null !== C2) {
      var _ = p(w2) ? "function" == typeof n2 ? n2(r2, k2) : r2 : r2 + (c2 ? "." + k2 : "[" + k2 + "]");
      d(x3, t3(C2, _, n2, o2, i2, u2, a2, s2, c2, l2, y2, g2, b2, m2));
    }
  }
  return x3;
}, j = Object.prototype.hasOwnProperty, w = Array.isArray, $ = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: f$1.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, O = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, e2) {
    return String.fromCharCode(parseInt(e2, 10));
  });
}, E$1 = function(t4, e2) {
  return t4 && "string" == typeof t4 && e2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, R = function(t4, e2, r2, n2) {
  if (t4) {
    var o2 = r2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = r2.depth > 0 && /(\[[^[\]]*])/.exec(o2), a2 = u2 ? o2.slice(0, u2.index) : o2, s2 = [];
    if (a2) {
      if (!r2.plainObjects && j.call(Object.prototype, a2) && !r2.allowPrototypes) return;
      s2.push(a2);
    }
    for (var f2 = 0; r2.depth > 0 && null !== (u2 = i2.exec(o2)) && f2 < r2.depth; ) {
      if (f2 += 1, !r2.plainObjects && j.call(Object.prototype, u2[1].slice(1, -1)) && !r2.allowPrototypes) return;
      s2.push(u2[1]);
    }
    return u2 && s2.push("[" + o2.slice(u2.index) + "]"), function(t5, e3, r3, n3) {
      for (var o3 = n3 ? e3 : E$1(e3, r3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, a3 = t5[i3];
        if ("[]" === a3 && r3.parseArrays) u3 = [].concat(o3);
        else {
          u3 = r3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var s3 = "[" === a3.charAt(0) && "]" === a3.charAt(a3.length - 1) ? a3.slice(1, -1) : a3, f3 = parseInt(s3, 10);
          r3.parseArrays || "" !== s3 ? !isNaN(f3) && a3 !== s3 && String(f3) === s3 && f3 >= 0 && r3.parseArrays && f3 <= r3.arrayLimit ? (u3 = [])[f3] = o3 : "__proto__" !== s3 && (u3[s3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(s2, e2, r2, n2);
  }
}, S$1 = function(t4, e2) {
  var r2 = /* @__PURE__ */ function(t5) {
    return $;
  }();
  if ("" === t4 || null == t4) return r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n2 = "string" == typeof t4 ? function(t5, e3) {
    var r3, n3 = {}, o3 = (e3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(e3.delimiter, Infinity === e3.parameterLimit ? void 0 : e3.parameterLimit), i3 = -1, u3 = e3.charset;
    if (e3.charsetSentinel) for (r3 = 0; r3 < o3.length; ++r3) 0 === o3[r3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[r3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[r3] && (u3 = "iso-8859-1"), i3 = r3, r3 = o3.length);
    for (r3 = 0; r3 < o3.length; ++r3) if (r3 !== i3) {
      var a3, s3, c2 = o3[r3], l2 = c2.indexOf("]="), p2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
      -1 === p2 ? (a3 = e3.decoder(c2, $.decoder, u3, "key"), s3 = e3.strictNullHandling ? null : "") : (a3 = e3.decoder(c2.slice(0, p2), $.decoder, u3, "key"), s3 = f$1.maybeMap(E$1(c2.slice(p2 + 1), e3), function(t6) {
        return e3.decoder(t6, $.decoder, u3, "value");
      })), s3 && e3.interpretNumericEntities && "iso-8859-1" === u3 && (s3 = O(s3)), c2.indexOf("[]=") > -1 && (s3 = w(s3) ? [s3] : s3), n3[a3] = j.call(n3, a3) ? f$1.combine(n3[a3], s3) : s3;
    }
    return n3;
  }(t4, r2) : t4, o2 = r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(n2), u2 = 0; u2 < i2.length; ++u2) {
    var a2 = i2[u2], s2 = R(a2, n2[a2], r2, "string" == typeof t4);
    o2 = f$1.merge(o2, s2, r2);
  }
  return f$1.compact(o2);
};
let x$1 = class x {
  constructor(t4, e2, r2) {
    var n2, o2;
    this.name = t4, this.definition = e2, this.bindings = null != (n2 = e2.bindings) ? n2 : {}, this.wheres = null != (o2 = e2.wheres) ? o2 : {}, this.config = r2;
  }
  get template() {
    const t4 = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return "" === t4 ? "/" : t4;
  }
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  get parameterSegments() {
    var t4, e2;
    return null != (t4 = null == (e2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e2.map((t5) => ({ name: t5.replace(/{|\??}/g, ""), required: !/\?}$/.test(t5) }))) ? t4 : [];
  }
  matchesUrl(t4) {
    var e2;
    if (!this.definition.methods.includes("GET")) return false;
    const r2 = this.template.replace(/[.*+$()[\]]/g, "\\$&").replace(/(\/?){([^}?]*)(\??)}/g, (t5, e3, r3, n3) => {
      var o3;
      const i3 = `(?<${r3}>${(null == (o3 = this.wheres[r3]) ? void 0 : o3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e3}${i3})?` : `${e3}${i3}`;
    }).replace(/^\w+:\/\//, ""), [n2, o2] = t4.replace(/^\w+:\/\//, "").split("?"), i2 = null != (e2 = new RegExp(`^${r2}/?$`).exec(n2)) ? e2 : new RegExp(`^${r2}/?$`).exec(decodeURI(n2));
    if (i2) {
      for (const t5 in i2.groups) i2.groups[t5] = "string" == typeof i2.groups[t5] ? decodeURIComponent(i2.groups[t5]) : i2.groups[t5];
      return { params: i2.groups, query: S$1(o2) };
    }
    return false;
  }
  compile(t4) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (e2, r2, n2) => {
      var o2, i2;
      if (!n2 && [null, void 0].includes(t4[r2])) throw new Error(`Ziggy error: '${r2}' parameter is required for route '${this.name}'.`);
      if (this.wheres[r2] && !new RegExp(`^${n2 ? `(${this.wheres[r2]})?` : this.wheres[r2]}$`).test(null != (i2 = t4[r2]) ? i2 : "")) throw new Error(`Ziggy error: '${r2}' parameter '${t4[r2]}' does not match required format '${this.wheres[r2]}' for route '${this.name}'.`);
      return encodeURI(null != (o2 = t4[r2]) ? o2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }
};
let N$1 = class N extends String {
  constructor(e2, r2, n2 = true, o2) {
    if (super(), this.t = null != o2 ? o2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, this.t = t({}, this.t, { absolute: n2 }), e2) {
      if (!this.t.routes[e2]) throw new Error(`Ziggy error: route '${e2}' is not in the route list.`);
      this.i = new x$1(e2, this.t.routes[e2], this.t), this.u = this.l(r2);
    }
  }
  toString() {
    const e2 = Object.keys(this.u).filter((t4) => !this.i.parameterSegments.some(({ name: e3 }) => e3 === t4)).filter((t4) => "_query" !== t4).reduce((e3, r2) => t({}, e3, { [r2]: this.u[r2] }), {});
    return this.i.compile(this.u) + function(t4, e3) {
      var r2, n2 = t4, i2 = function(t5) {
        if (!t5) return v;
        if (null != t5.encoder && "function" != typeof t5.encoder) throw new TypeError("Encoder has to be a function.");
        var e4 = t5.charset || v.charset;
        if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r3 = o.default;
        if (void 0 !== t5.format) {
          if (!c.call(o.formatters, t5.format)) throw new TypeError("Unknown format option provided.");
          r3 = t5.format;
        }
        var n3 = o.formatters[r3], i3 = v.filter;
        return ("function" == typeof t5.filter || p(t5.filter)) && (i3 = t5.filter), { addQueryPrefix: "boolean" == typeof t5.addQueryPrefix ? t5.addQueryPrefix : v.addQueryPrefix, allowDots: void 0 === t5.allowDots ? v.allowDots : !!t5.allowDots, charset: e4, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : v.charsetSentinel, delimiter: void 0 === t5.delimiter ? v.delimiter : t5.delimiter, encode: "boolean" == typeof t5.encode ? t5.encode : v.encode, encoder: "function" == typeof t5.encoder ? t5.encoder : v.encoder, encodeValuesOnly: "boolean" == typeof t5.encodeValuesOnly ? t5.encodeValuesOnly : v.encodeValuesOnly, filter: i3, format: r3, formatter: n3, serializeDate: "function" == typeof t5.serializeDate ? t5.serializeDate : v.serializeDate, skipNulls: "boolean" == typeof t5.skipNulls ? t5.skipNulls : v.skipNulls, sort: "function" == typeof t5.sort ? t5.sort : null, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : v.strictNullHandling };
      }(e3);
      "function" == typeof i2.filter ? n2 = (0, i2.filter)("", n2) : p(i2.filter) && (r2 = i2.filter);
      var u2 = [];
      if ("object" != typeof n2 || null === n2) return "";
      var a2 = l[e3 && e3.arrayFormat in l ? e3.arrayFormat : e3 && "indices" in e3 ? e3.indices ? "indices" : "repeat" : "indices"];
      r2 || (r2 = Object.keys(n2)), i2.sort && r2.sort(i2.sort);
      for (var s2 = 0; s2 < r2.length; ++s2) {
        var f2 = r2[s2];
        i2.skipNulls && null === n2[f2] || d(u2, m$1(n2[f2], f2, a2, i2.strictNullHandling, i2.skipNulls, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset));
      }
      var h2 = u2.join(i2.delimiter), y2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (y2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), h2.length > 0 ? y2 + h2 : "";
    }(t({}, e2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t4, e3) => "boolean" == typeof t4 ? Number(t4) : e3(t4) });
  }
  p(e2) {
    e2 ? this.t.absolute && e2.startsWith("/") && (e2 = this.h().host + e2) : e2 = this.v();
    let r2 = {};
    const [n2, o2] = Object.entries(this.t.routes).find(([t4, n3]) => r2 = new x$1(t4, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    return t({ name: n2 }, r2, { route: o2 });
  }
  v() {
    const { host: t4, pathname: e2, search: r2 } = this.h();
    return (this.t.absolute ? t4 + e2 : e2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + r2;
  }
  current(e2, r2) {
    const { name: n2, params: o2, query: i2, route: u2 } = this.p();
    if (!e2) return n2;
    const a2 = new RegExp(`^${e2.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(r2) || !a2) return a2;
    const s2 = new x$1(n2, u2, this.t);
    r2 = this.l(r2, s2);
    const f2 = t({}, o2, i2);
    if (Object.values(r2).every((t4) => !t4) && !Object.values(f2).some((t4) => void 0 !== t4)) return true;
    const c2 = (t4, e3) => Object.entries(t4).every(([t5, r3]) => Array.isArray(r3) && Array.isArray(e3[t5]) ? r3.every((r4) => e3[t5].includes(r4)) : "object" == typeof r3 && "object" == typeof e3[t5] && null !== r3 && null !== e3[t5] ? c2(r3, e3[t5]) : e3[t5] == r3);
    return c2(r2, f2);
  }
  h() {
    var t4, e2, r2, n2, o2, i2;
    const { host: u2 = "", pathname: a2 = "", search: s2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t4 = null == (e2 = this.t.location) ? void 0 : e2.host) ? t4 : u2, pathname: null != (r2 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? r2 : a2, search: null != (o2 = null == (i2 = this.t.location) ? void 0 : i2.search) ? o2 : s2 };
  }
  get params() {
    const { params: e2, query: r2 } = this.p();
    return t({}, e2, r2);
  }
  get routeParams() {
    return this.p().params;
  }
  get queryParams() {
    return this.p().query;
  }
  has(t4) {
    return this.t.routes.hasOwnProperty(t4);
  }
  l(e2 = {}, r2 = this.i) {
    null != e2 || (e2 = {}), e2 = ["string", "number"].includes(typeof e2) ? [e2] : e2;
    const n2 = r2.parameterSegments.filter(({ name: t4 }) => !this.t.defaults[t4]);
    return Array.isArray(e2) ? e2 = e2.reduce((e3, r3, o2) => t({}, e3, n2[o2] ? { [n2[o2].name]: r3 } : "object" == typeof r3 ? r3 : { [r3]: "" }), {}) : 1 !== n2.length || e2[n2[0].name] || !e2.hasOwnProperty(Object.values(r2.bindings)[0]) && !e2.hasOwnProperty("id") || (e2 = { [n2[0].name]: e2 }), t({}, this.m(r2), this.j(e2, r2));
  }
  m(e2) {
    return e2.parameterSegments.filter(({ name: t4 }) => this.t.defaults[t4]).reduce((e3, { name: r2 }, n2) => t({}, e3, { [r2]: this.t.defaults[r2] }), {});
  }
  j(e2, { bindings: r2, parameterSegments: n2 }) {
    return Object.entries(e2).reduce((e3, [o2, i2]) => {
      if (!i2 || "object" != typeof i2 || Array.isArray(i2) || !n2.some(({ name: t4 }) => t4 === o2)) return t({}, e3, { [o2]: i2 });
      if (!i2.hasOwnProperty(r2[o2])) {
        if (!i2.hasOwnProperty("id")) throw new Error(`Ziggy error: object passed as '${o2}' parameter is missing route model binding key '${r2[o2]}'.`);
        r2[o2] = "id";
      }
      return t({}, e3, { [o2]: i2[r2[o2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
};
function T$1(t4, e2, r2, n2) {
  const o2 = new N$1(t4, e2, r2, n2);
  return t4 ? o2.toString() : o2;
}
const k = { install(t4, e2) {
  const r2 = (t5, r3, n2, o2 = e2) => T$1(t5, r3, n2, o2);
  parseInt(t4.version) > 2 ? (t4.config.globalProperties.route = r2, t4.provide("route", r2)) : t4.mixin({ methods: { route: r2 } });
} };
var E = Object.defineProperty, M = Object.defineProperties;
var x2 = Object.getOwnPropertyDescriptors;
var V = Object.getOwnPropertySymbols;
var I = Object.prototype.hasOwnProperty, N2 = Object.prototype.propertyIsEnumerable;
var C = (e2, t4, s2) => t4 in e2 ? E(e2, t4, { enumerable: true, configurable: true, writable: true, value: s2 }) : e2[t4] = s2, f = (e2, t4) => {
  for (var s2 in t4 || (t4 = {}))
    I.call(t4, s2) && C(e2, s2, t4[s2]);
  if (V)
    for (var s2 of V(t4))
      N2.call(t4, s2) && C(e2, s2, t4[s2]);
  return e2;
}, m = (e2, t4) => M(e2, x2(t4));
const U = {
  props: {
    autoscroll: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    typeAheadPointer() {
      this.autoscroll && this.maybeAdjustScroll();
    },
    open(e2) {
      this.autoscroll && e2 && this.$nextTick(() => this.maybeAdjustScroll());
    }
  },
  methods: {
    maybeAdjustScroll() {
      var t4;
      const e2 = ((t4 = this.$refs.dropdownMenu) == null ? void 0 : t4.children[this.typeAheadPointer]) || false;
      if (e2) {
        const s2 = this.getDropdownViewport(), { top: n2, bottom: l2, height: i2 } = e2.getBoundingClientRect();
        if (n2 < s2.top)
          return this.$refs.dropdownMenu.scrollTop = e2.offsetTop;
        if (l2 > s2.bottom)
          return this.$refs.dropdownMenu.scrollTop = e2.offsetTop - (s2.height - i2);
      }
    },
    getDropdownViewport() {
      return this.$refs.dropdownMenu ? this.$refs.dropdownMenu.getBoundingClientRect() : {
        height: 0,
        top: 0,
        bottom: 0
      };
    }
  }
}, q = {
  data() {
    return {
      typeAheadPointer: -1
    };
  },
  watch: {
    filteredOptions() {
      for (let e2 = 0; e2 < this.filteredOptions.length; e2++)
        if (this.selectable(this.filteredOptions[e2])) {
          this.typeAheadPointer = e2;
          break;
        }
    },
    open(e2) {
      e2 && this.typeAheadToLastSelected();
    },
    selectedValue() {
      this.open && this.typeAheadToLastSelected();
    }
  },
  methods: {
    typeAheadUp() {
      for (let e2 = this.typeAheadPointer - 1; e2 >= 0; e2--)
        if (this.selectable(this.filteredOptions[e2])) {
          this.typeAheadPointer = e2;
          break;
        }
    },
    typeAheadDown() {
      for (let e2 = this.typeAheadPointer + 1; e2 < this.filteredOptions.length; e2++)
        if (this.selectable(this.filteredOptions[e2])) {
          this.typeAheadPointer = e2;
          break;
        }
    },
    typeAheadSelect() {
      const e2 = this.filteredOptions[this.typeAheadPointer];
      e2 && this.selectable(e2) && this.select(e2);
    },
    typeAheadToLastSelected() {
      this.typeAheadPointer = this.selectedValue.length !== 0 ? this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length - 1]) : -1;
    }
  }
}, J = {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      mutableLoading: false
    };
  },
  watch: {
    search() {
      this.$emit("search", this.search, this.toggleLoading);
    },
    loading(e2) {
      this.mutableLoading = e2;
    }
  },
  methods: {
    toggleLoading(e2 = null) {
      return e2 == null ? this.mutableLoading = !this.mutableLoading : this.mutableLoading = e2;
    }
  }
}, S = (e2, t4) => {
  const s2 = e2.__vccOpts || e2;
  for (const [n2, l2] of t4)
    s2[n2] = l2;
  return s2;
}, H = {}, X = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, Y = /* @__PURE__ */ createElementVNode("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), Q = [
  Y
];
function G(e2, t4) {
  return openBlock(), createElementBlock("svg", X, Q);
}
const W = /* @__PURE__ */ S(H, [["render", G]]), Z = {}, ee = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, te = /* @__PURE__ */ createElementVNode("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), se = [
  te
];
function ie(e2, t4) {
  return openBlock(), createElementBlock("svg", ee, se);
}
const oe = /* @__PURE__ */ S(Z, [["render", ie]]), T = {
  Deselect: W,
  OpenIndicator: oe
}, ne = {
  mounted(e2, { instance: t4 }) {
    if (t4.appendToBody) {
      const {
        height: s2,
        top: n2,
        left: l2,
        width: i2
      } = t4.$refs.toggle.getBoundingClientRect();
      let y2 = window.scrollX || window.pageXOffset, o2 = window.scrollY || window.pageYOffset;
      e2.unbindPosition = t4.calculatePosition(e2, t4, {
        width: i2 + "px",
        left: y2 + l2 + "px",
        top: o2 + n2 + s2 + "px"
      }), document.body.appendChild(e2);
    }
  },
  unmounted(e2, { instance: t4 }) {
    t4.appendToBody && (e2.unbindPosition && typeof e2.unbindPosition == "function" && e2.unbindPosition(), e2.parentNode && e2.parentNode.removeChild(e2));
  }
};
function le(e2) {
  const t4 = {};
  return Object.keys(e2).sort().forEach((s2) => {
    t4[s2] = e2[s2];
  }), JSON.stringify(t4);
}
let ae = 0;
function re() {
  return ++ae;
}
const de = {
  components: f({}, T),
  directives: { appendToBody: ne },
  mixins: [U, q, J],
  compatConfig: {
    MODE: 3
  },
  emits: [
    "open",
    "close",
    "update:modelValue",
    "search",
    "search:compositionstart",
    "search:compositionend",
    "search:keydown",
    "search:blur",
    "search:focus",
    "search:input",
    "option:created",
    "option:selecting",
    "option:selected",
    "option:deselecting",
    "option:deselected"
  ],
  props: {
    modelValue: {},
    components: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    deselectFromDropdown: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    transition: {
      type: String,
      default: "vs__fade"
    },
    clearSearchOnSelect: {
      type: Boolean,
      default: true
    },
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: "label"
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    reduce: {
      type: Function,
      default: (e2) => e2
    },
    selectable: {
      type: Function,
      default: (e2) => true
    },
    getOptionLabel: {
      type: Function,
      default(e2) {
        return typeof e2 == "object" ? e2.hasOwnProperty(this.label) ? e2[this.label] : console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e2)}.
https://vue-select.org/api/props.html#getoptionlabel`) : e2;
      }
    },
    getOptionKey: {
      type: Function,
      default(e2) {
        if (typeof e2 != "object")
          return e2;
        try {
          return e2.hasOwnProperty("id") ? e2.id : le(e2);
        } catch (t4) {
          return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`, e2, t4);
        }
      }
    },
    onTab: {
      type: Function,
      default: function() {
        this.selectOnTab && !this.isComposing && this.typeAheadSelect();
      }
    },
    taggable: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: Number,
      default: null
    },
    pushTags: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: true
    },
    filterBy: {
      type: Function,
      default(e2, t4, s2) {
        return (t4 || "").toLocaleLowerCase().indexOf(s2.toLocaleLowerCase()) > -1;
      }
    },
    filter: {
      type: Function,
      default(e2, t4) {
        return e2.filter((s2) => {
          let n2 = this.getOptionLabel(s2);
          return typeof n2 == "number" && (n2 = n2.toString()), this.filterBy(s2, n2, t4);
        });
      }
    },
    createOption: {
      type: Function,
      default(e2) {
        return typeof this.optionList[0] == "object" ? { [this.label]: e2 } : e2;
      }
    },
    resetOnOptionsChange: {
      default: false,
      validator: (e2) => ["function", "boolean"].includes(typeof e2)
    },
    clearSearchOnBlur: {
      type: Function,
      default: function({ clearSearchOnSelect: e2, multiple: t4 }) {
        return e2 && !t4;
      }
    },
    noDrop: {
      type: Boolean,
      default: false
    },
    inputId: {
      type: String
    },
    dir: {
      type: String,
      default: "auto"
    },
    selectOnTab: {
      type: Boolean,
      default: false
    },
    selectOnKeyCodes: {
      type: Array,
      default: () => [13]
    },
    searchInputQuerySelector: {
      type: String,
      default: "[type=search]"
    },
    mapKeydown: {
      type: Function,
      default: (e2, t4) => e2
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    calculatePosition: {
      type: Function,
      default(e2, t4, { width: s2, top: n2, left: l2 }) {
        e2.style.top = n2, e2.style.left = l2, e2.style.width = s2;
      }
    },
    dropdownShouldOpen: {
      type: Function,
      default({ noDrop: e2, open: t4, mutableLoading: s2 }) {
        return e2 ? false : t4 && !s2;
      }
    },
    uid: {
      type: [String, Number],
      default: () => re()
    }
  },
  data() {
    return {
      search: "",
      open: false,
      isComposing: false,
      pushedTags: [],
      _value: [],
      deselectButtons: []
    };
  },
  computed: {
    isReducingValues() {
      return this.$props.reduce !== this.$options.props.reduce.default;
    },
    isTrackingValues() {
      return typeof this.modelValue == "undefined" || this.isReducingValues;
    },
    selectedValue() {
      let e2 = this.modelValue;
      return this.isTrackingValues && (e2 = this.$data._value), e2 != null && e2 !== "" ? [].concat(e2) : [];
    },
    optionList() {
      return this.options.concat(this.pushTags ? this.pushedTags : []);
    },
    searchEl() {
      return this.$slots.search ? this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector) : this.$refs.search;
    },
    scope() {
      const e2 = {
        search: this.search,
        loading: this.loading,
        searching: this.searching,
        filteredOptions: this.filteredOptions
      };
      return {
        search: {
          attributes: f({
            disabled: this.disabled,
            placeholder: this.searchPlaceholder,
            tabindex: this.tabindex,
            readonly: !this.searchable,
            id: this.inputId,
            "aria-autocomplete": "list",
            "aria-labelledby": `vs${this.uid}__combobox`,
            "aria-controls": `vs${this.uid}__listbox`,
            ref: "search",
            type: "search",
            autocomplete: this.autocomplete,
            value: this.search
          }, this.dropdownOpen && this.filteredOptions[this.typeAheadPointer] ? {
            "aria-activedescendant": `vs${this.uid}__option-${this.typeAheadPointer}`
          } : {}),
          events: {
            compositionstart: () => this.isComposing = true,
            compositionend: () => this.isComposing = false,
            keydown: this.onSearchKeyDown,
            blur: this.onSearchBlur,
            focus: this.onSearchFocus,
            input: (t4) => this.search = t4.target.value
          }
        },
        spinner: {
          loading: this.mutableLoading
        },
        noOptions: {
          search: this.search,
          loading: this.mutableLoading,
          searching: this.searching
        },
        openIndicator: {
          attributes: {
            ref: "openIndicator",
            role: "presentation",
            class: "vs__open-indicator"
          }
        },
        listHeader: e2,
        listFooter: e2,
        header: m(f({}, e2), { deselect: this.deselect }),
        footer: m(f({}, e2), { deselect: this.deselect })
      };
    },
    childComponents() {
      return f(f({}, T), this.components);
    },
    stateClasses() {
      return {
        "vs--open": this.dropdownOpen,
        "vs--single": !this.multiple,
        "vs--multiple": this.multiple,
        "vs--searching": this.searching && !this.noDrop,
        "vs--searchable": this.searchable && !this.noDrop,
        "vs--unsearchable": !this.searchable,
        "vs--loading": this.mutableLoading,
        "vs--disabled": this.disabled
      };
    },
    searching() {
      return !!this.search;
    },
    dropdownOpen() {
      return this.dropdownShouldOpen(this);
    },
    searchPlaceholder() {
      return this.isValueEmpty && this.placeholder ? this.placeholder : void 0;
    },
    filteredOptions() {
      const e2 = [].concat(this.optionList);
      if (!this.filterable && !this.taggable)
        return e2;
      const t4 = this.search.length ? this.filter(e2, this.search, this) : e2;
      if (this.taggable && this.search.length) {
        const s2 = this.createOption(this.search);
        this.optionExists(s2) || t4.unshift(s2);
      }
      return t4;
    },
    isValueEmpty() {
      return this.selectedValue.length === 0;
    },
    showClearButton() {
      return !this.multiple && this.clearable && !this.open && !this.isValueEmpty;
    }
  },
  watch: {
    options(e2, t4) {
      const s2 = () => typeof this.resetOnOptionsChange == "function" ? this.resetOnOptionsChange(e2, t4, this.selectedValue) : this.resetOnOptionsChange;
      !this.taggable && s2() && this.clearSelection(), this.modelValue && this.isTrackingValues && this.setInternalValueFromOptions(this.modelValue);
    },
    modelValue: {
      immediate: true,
      handler(e2) {
        this.isTrackingValues && this.setInternalValueFromOptions(e2);
      }
    },
    multiple() {
      this.clearSelection();
    },
    open(e2) {
      this.$emit(e2 ? "open" : "close");
    }
  },
  created() {
    this.mutableLoading = this.loading;
  },
  methods: {
    setInternalValueFromOptions(e2) {
      Array.isArray(e2) ? this.$data._value = e2.map((t4) => this.findOptionFromReducedValue(t4)) : this.$data._value = this.findOptionFromReducedValue(e2);
    },
    select(e2) {
      this.$emit("option:selecting", e2), this.isOptionSelected(e2) ? this.deselectFromDropdown && (this.clearable || this.multiple && this.selectedValue.length > 1) && this.deselect(e2) : (this.taggable && !this.optionExists(e2) && (this.$emit("option:created", e2), this.pushTag(e2)), this.multiple && (e2 = this.selectedValue.concat(e2)), this.updateValue(e2), this.$emit("option:selected", e2)), this.onAfterSelect(e2);
    },
    deselect(e2) {
      this.$emit("option:deselecting", e2), this.updateValue(this.selectedValue.filter((t4) => !this.optionComparator(t4, e2))), this.$emit("option:deselected", e2);
    },
    clearSelection() {
      this.updateValue(this.multiple ? [] : null);
    },
    onAfterSelect(e2) {
      this.closeOnSelect && (this.open = !this.open, this.searchEl.blur()), this.clearSearchOnSelect && (this.search = "");
    },
    updateValue(e2) {
      typeof this.modelValue == "undefined" && (this.$data._value = e2), e2 !== null && (Array.isArray(e2) ? e2 = e2.map((t4) => this.reduce(t4)) : e2 = this.reduce(e2)), this.$emit("update:modelValue", e2);
    },
    toggleDropdown(e2) {
      const t4 = e2.target !== this.searchEl;
      t4 && e2.preventDefault();
      const s2 = [
        ...this.deselectButtons || [],
        this.$refs.clearButton
      ];
      if (this.searchEl === void 0 || s2.filter(Boolean).some((n2) => n2.contains(e2.target) || n2 === e2.target)) {
        e2.preventDefault();
        return;
      }
      this.open && t4 ? this.searchEl.blur() : this.disabled || (this.open = true, this.searchEl.focus());
    },
    isOptionSelected(e2) {
      return this.selectedValue.some((t4) => this.optionComparator(t4, e2));
    },
    isOptionDeselectable(e2) {
      return this.isOptionSelected(e2) && this.deselectFromDropdown;
    },
    optionComparator(e2, t4) {
      return this.getOptionKey(e2) === this.getOptionKey(t4);
    },
    findOptionFromReducedValue(e2) {
      const t4 = (n2) => JSON.stringify(this.reduce(n2)) === JSON.stringify(e2), s2 = [...this.options, ...this.pushedTags].filter(t4);
      return s2.length === 1 ? s2[0] : s2.find((n2) => this.optionComparator(n2, this.$data._value)) || e2;
    },
    closeSearchOptions() {
      this.open = false, this.$emit("search:blur");
    },
    maybeDeleteValue() {
      if (!this.searchEl.value.length && this.selectedValue && this.selectedValue.length && this.clearable) {
        let e2 = null;
        this.multiple && (e2 = [
          ...this.selectedValue.slice(0, this.selectedValue.length - 1)
        ]), this.updateValue(e2);
      }
    },
    optionExists(e2) {
      return this.optionList.some((t4) => this.optionComparator(t4, e2));
    },
    normalizeOptionForSlot(e2) {
      return typeof e2 == "object" ? e2 : { [this.label]: e2 };
    },
    pushTag(e2) {
      this.pushedTags.push(e2);
    },
    onEscape() {
      this.search.length ? this.search = "" : this.searchEl.blur();
    },
    onSearchBlur() {
      if (this.mousedown && !this.searching)
        this.mousedown = false;
      else {
        const { clearSearchOnSelect: e2, multiple: t4 } = this;
        this.clearSearchOnBlur({ clearSearchOnSelect: e2, multiple: t4 }) && (this.search = ""), this.closeSearchOptions();
        return;
      }
      if (this.search.length === 0 && this.options.length === 0) {
        this.closeSearchOptions();
        return;
      }
    },
    onSearchFocus() {
      this.open = true, this.$emit("search:focus");
    },
    onMousedown() {
      this.mousedown = true;
    },
    onMouseUp() {
      this.mousedown = false;
    },
    onSearchKeyDown(e2) {
      const t4 = (l2) => (l2.preventDefault(), !this.isComposing && this.typeAheadSelect()), s2 = {
        8: (l2) => this.maybeDeleteValue(),
        9: (l2) => this.onTab(),
        27: (l2) => this.onEscape(),
        38: (l2) => (l2.preventDefault(), this.typeAheadUp()),
        40: (l2) => (l2.preventDefault(), this.typeAheadDown())
      };
      this.selectOnKeyCodes.forEach((l2) => s2[l2] = t4);
      const n2 = this.mapKeydown(s2, this);
      if (typeof n2[e2.keyCode] == "function")
        return n2[e2.keyCode](e2);
    }
  }
}, he = ["dir"], ce = ["id", "aria-expanded", "aria-owns"], ue = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, pe = ["disabled", "title", "aria-label", "onClick"], fe = {
  ref: "actions",
  class: "vs__actions"
}, ge = ["disabled"], ye = { class: "vs__spinner" }, me = ["id"], be = ["id", "aria-selected", "onMouseover", "onClick"], _e = {
  key: 0,
  class: "vs__no-options"
}, Oe = /* @__PURE__ */ createTextVNode(" Sorry, no matching options. "), we = ["id"];
function ve(e2, t4, s2, n2, l2, i2) {
  const y2 = resolveDirective("append-to-body");
  return openBlock(), createElementBlock("div", {
    dir: s2.dir,
    class: normalizeClass(["v-select", i2.stateClasses])
  }, [
    renderSlot(e2.$slots, "header", normalizeProps(guardReactiveProps(i2.scope.header))),
    createElementVNode("div", {
      id: `vs${s2.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": i2.dropdownOpen.toString(),
      "aria-owns": `vs${s2.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: t4[1] || (t4[1] = (o2) => i2.toggleDropdown(o2))
    }, [
      createElementVNode("div", ue, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(i2.selectedValue, (o2, p2) => renderSlot(e2.$slots, "selected-option-container", {
          option: i2.normalizeOptionForSlot(o2),
          deselect: i2.deselect,
          multiple: s2.multiple,
          disabled: s2.disabled
        }, () => [
          (openBlock(), createElementBlock("span", {
            key: s2.getOptionKey(o2),
            class: "vs__selected"
          }, [
            renderSlot(e2.$slots, "selected-option", normalizeProps(guardReactiveProps(i2.normalizeOptionForSlot(o2))), () => [
              createTextVNode(toDisplayString(s2.getOptionLabel(o2)), 1)
            ]),
            s2.multiple ? (openBlock(), createElementBlock("button", {
              key: 0,
              ref_for: true,
              ref: (g2) => l2.deselectButtons[p2] = g2,
              disabled: s2.disabled,
              type: "button",
              class: "vs__deselect",
              title: `Deselect ${s2.getOptionLabel(o2)}`,
              "aria-label": `Deselect ${s2.getOptionLabel(o2)}`,
              onClick: (g2) => i2.deselect(o2)
            }, [
              (openBlock(), createBlock(resolveDynamicComponent(i2.childComponents.Deselect)))
            ], 8, pe)) : createCommentVNode("", true)
          ]))
        ])), 256)),
        renderSlot(e2.$slots, "search", normalizeProps(guardReactiveProps(i2.scope.search)), () => [
          createElementVNode("input", mergeProps({ class: "vs__search" }, i2.scope.search.attributes, toHandlers(i2.scope.search.events)), null, 16)
        ])
      ], 512),
      createElementVNode("div", fe, [
        withDirectives(createElementVNode("button", {
          ref: "clearButton",
          disabled: s2.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: t4[0] || (t4[0] = (...o2) => i2.clearSelection && i2.clearSelection(...o2))
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(i2.childComponents.Deselect)))
        ], 8, ge), [
          [vShow, i2.showClearButton]
        ]),
        renderSlot(e2.$slots, "open-indicator", normalizeProps(guardReactiveProps(i2.scope.openIndicator)), () => [
          s2.noDrop ? createCommentVNode("", true) : (openBlock(), createBlock(resolveDynamicComponent(i2.childComponents.OpenIndicator), normalizeProps(mergeProps({ key: 0 }, i2.scope.openIndicator.attributes)), null, 16))
        ]),
        renderSlot(e2.$slots, "spinner", normalizeProps(guardReactiveProps(i2.scope.spinner)), () => [
          withDirectives(createElementVNode("div", ye, "Loading...", 512), [
            [vShow, e2.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, ce),
    createVNode(Transition, { name: s2.transition }, {
      default: withCtx(() => [
        i2.dropdownOpen ? withDirectives((openBlock(), createElementBlock("ul", {
          id: `vs${s2.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${s2.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: t4[2] || (t4[2] = withModifiers((...o2) => i2.onMousedown && i2.onMousedown(...o2), ["prevent"])),
          onMouseup: t4[3] || (t4[3] = (...o2) => i2.onMouseUp && i2.onMouseUp(...o2))
        }, [
          renderSlot(e2.$slots, "list-header", normalizeProps(guardReactiveProps(i2.scope.listHeader))),
          (openBlock(true), createElementBlock(Fragment, null, renderList(i2.filteredOptions, (o2, p2) => (openBlock(), createElementBlock("li", {
            id: `vs${s2.uid}__option-${p2}`,
            key: s2.getOptionKey(o2),
            role: "option",
            class: normalizeClass(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": i2.isOptionDeselectable(o2) && p2 === e2.typeAheadPointer,
              "vs__dropdown-option--selected": i2.isOptionSelected(o2),
              "vs__dropdown-option--highlight": p2 === e2.typeAheadPointer,
              "vs__dropdown-option--disabled": !s2.selectable(o2)
            }]),
            "aria-selected": p2 === e2.typeAheadPointer ? true : null,
            onMouseover: (g2) => s2.selectable(o2) ? e2.typeAheadPointer = p2 : null,
            onClick: withModifiers((g2) => s2.selectable(o2) ? i2.select(o2) : null, ["prevent", "stop"])
          }, [
            renderSlot(e2.$slots, "option", normalizeProps(guardReactiveProps(i2.normalizeOptionForSlot(o2))), () => [
              createTextVNode(toDisplayString(s2.getOptionLabel(o2)), 1)
            ])
          ], 42, be))), 128)),
          i2.filteredOptions.length === 0 ? (openBlock(), createElementBlock("li", _e, [
            renderSlot(e2.$slots, "no-options", normalizeProps(guardReactiveProps(i2.scope.noOptions)), () => [
              Oe
            ])
          ])) : createCommentVNode("", true),
          renderSlot(e2.$slots, "list-footer", normalizeProps(guardReactiveProps(i2.scope.listFooter)))
        ], 40, me)), [
          [y2]
        ]) : (openBlock(), createElementBlock("ul", {
          key: 1,
          id: `vs${s2.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, we))
      ]),
      _: 3
    }, 8, ["name"]),
    renderSlot(e2.$slots, "footer", normalizeProps(guardReactiveProps(i2.scope.footer)))
  ], 10, he);
}
const Ce = /* @__PURE__ */ S(de, [["render", ve]]);
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Beranda.vue": __vite_glob_0_0, "./Pages/Chatbot.vue": __vite_glob_0_1, "./Pages/Kabupaten.vue": __vite_glob_0_2, "./Pages/Reviews.vue": __vite_glob_0_3, "./Pages/Wisata/Index.vue": __vite_glob_0_4, "./Pages/Wisata/Show.vue": __vite_glob_0_5 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h$1(App, props)
      }).use(plugin).use(k).component("v-select", Ce);
    }
  })
);
