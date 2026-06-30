const fs = require('fs');
const path = require('path');

const srcDir = '/home/gowtham/.gemini/antigravity/brain/5e7c6fc0-64dc-4a65-bd7f-24f56e2b95ba';
const destDir = '/home/gowtham/Downloads/next_version/public/images';

const files = [
  ['team_collaboration_1782707370855.png', 'team-collaboration.png'],
  ['team_brainstorming_1782707407672.png', 'team-brainstorming.png'],
  ['team_coding_1782707420922.png', 'team-coding.png'],
  ['team_design_review_1782707434092.png', 'team-design-review.png'],
  ['team_workspace_1782707445336.png', 'team-workspace.png'],
];

for (const [src, dest] of files) {
  try {
    fs.copyFileSync(path.join(srcDir, src), path.join(destDir, dest));
    console.log(`Copied ${src} -> ${dest}`);
  } catch (e) {
    console.error(`Failed to copy ${src}: ${e.message}`);
  }
}
console.log('Done!');
