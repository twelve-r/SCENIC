/* =========================
   CATEGORY FILTER
========================= */


// 获取分类按钮

const filterButtons =
    document.querySelectorAll(
        ".category-button"
    );


// 获取所有图片卡片

const cards =
    document.querySelectorAll(
        ".card"
    );



// 分类筛选功能

filterButtons.forEach(
    function(button){


        button.addEventListener(
            "click",
            function(){


                // 当前选择的分类

                const filter =
                    button.dataset.filter;



                // 清除其他按钮 active

                filterButtons.forEach(
                    function(btn){

                        btn.classList.remove(
                            "active"
                        );

                    }
                );



                // 当前按钮 active

                button.classList.add(
                    "active"
                );



                // 遍历图片

                cards.forEach(
                    function(card){


                        const category =
                            card.dataset.category;



                        // 显示符合分类的图片

                        if(
                            filter === "all"
                            ||
                            category === filter
                        ){


                            card.classList.remove(
                                "hide"
                            );


                            card.classList.add(
                                "show"
                            );


                        }


                        // 隐藏不符合分类的图片

                        else{


                            card.classList.remove(
                                "show"
                            );


                            card.classList.add(
                                "hide"
                            );


                        }


                    }
                );


            }
        );


    }
);







/* =========================
   IMAGE MODAL
========================= */


// 获取 Modal

const modal =
    document.querySelector(
        ".modal"
    );


// 获取 Modal 图片

const modalImage =
    document.querySelector(
        ".modal-content"
    );


// 获取 Modal 分类

const modalCategory =
    document.querySelector(
        ".modal-category"
    );


// 获取 Modal 标题

const modalTitle =
    document.querySelector(
        ".modal-title"
    );


// 获取关闭按钮

const modalClose =
    document.querySelector(
        ".modal-close"
    );







// 点击图片打开 Modal

cards.forEach(
    function(card){


        card.addEventListener(
            "click",
            function(){



                // 获取图片

                const image =
                    card.querySelector(
                        "img"
                    );



                // 获取分类

                const category =
                    card.querySelector(
                        ".card-info p"
                    );



                // 获取标题

                const title =
                    card.querySelector(
                        ".card-info h3"
                    );




                // 设置 Modal 图片

                modalImage.src =
                    image.src;



                modalImage.alt =
                    image.alt;



                // 设置分类文字

                modalCategory.textContent =
                    category.textContent;



                // 设置标题文字

                modalTitle.textContent =
                    title.textContent;



                // 显示 Modal

                modal.classList.add(
                    "show"
                );


            }
        );


    }
);







/* =========================
   CLOSE MODAL
========================= */


// 点击关闭按钮

modalClose.addEventListener(
    "click",
    function(){


        modal.classList.remove(
            "show"
        );


    }
);






// 点击背景关闭

modal.addEventListener(
    "click",
    function(event){



        // 判断是否点击黑色背景

        if(
            event.target === modal
        ){


            modal.classList.remove(
                "show"
            );


        }


    }
);







// ESC关闭

document.addEventListener(
    "keydown",
    function(event){



        if(
            event.key === "Escape"
        ){


            modal.classList.remove(
                "show"
            );


        }


    }
);







/* =========================
   SCROLL REVEAL
========================= */


const observer =
    new IntersectionObserver(
        function(entries){



            entries.forEach(
                function(entry){



                    if(
                        entry.isIntersecting
                    ){


                        entry.target.classList.add(
                            "visible"
                        );



                        observer.unobserve(
                            entry.target
                        );


                    }


                }
            );



        },
        {

            threshold:0.15

        }
    );


// 监听所有图片卡片

cards.forEach(
    function(card){


        observer.observe(
            card
        );


    }
);