const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true
});


// sr.reveal(`.banner,
//             .background,
//             .flowchart,
//             .function`, {
//     interval: 200
// });

sr.reveal(`.content, .btn,
            .background, .c1, .c2,
            .flowchart, .login, .search, .detail,
            .function`, {
    interval: 200
});