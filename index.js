const outputEl = jQuery('#output');

const initialize = () => {
  const containerEl = jQuery(`<div class="groups-container"></div>`);

  linkGroups.forEach((group) => {
    const groupEl = jQuery(`<div class="group"><h3>${group.label}</h3></div>`);
    const groupLinksEl = jQuery(`<ul></ul>`);

    group.links.forEach((link) => {
      groupLinksEl.append(`
        <li>
          <a href="${link.href}" class="${link.class}">
            <img src="${link.src}"/>${link.label}
          </a>
        </li>
      `);
    });

    groupEl.append(groupLinksEl);
    containerEl.append(groupEl);
  });

  outputEl.append(containerEl);
  outputEl.show();
};

initialize();
